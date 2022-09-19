import { setupDatabase } from "@/actions/Database";
import { createStudent, getAllStudents } from "@/actions/Student";
import Student from "@/interfaces/Student";
import { NextApiRequest, NextApiResponse } from "next";

interface ResponseType<T> {
    data: T;
    code: number;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseType<Student[]>>) {
    if (req.method === 'GET') {
        // set up the database & get the mongo client
        const client = await setupDatabase();
		const id = req.query.id
        // get the snakes from the actions
        const cursor = getAllStudents(client);
        const students: Student[] = [];

        // while (await cursor.hasNext()) {
        //     const doc = await cursor.next();
        //     snakes.push(doc as unknown as Snake);
        // }

        for await (const doc of cursor) {
            students.push(doc as unknown as Student);
        }

        // close the client connection
        await client.close();
		
        res.status(200).json(
            {                
                code: 200,
				data: students
            }
        );
    } else if (req.method === 'POST') {
        // cast the body as a snake (the interface)
        const student = req.body as Student;

        // set up the database & get the mongo client
        const client = await setupDatabase();

        // insert snake into the database
        const document = await createStudent(client, student);

        // add id to snake object, mongodb affects
        // the inserted object, & append _id
        student.id = document.insertedId;

        // close the client connection
        await client.close();

        // send the added student back!!
        res.status(200).json(
            {
                data: [
                    student
                ],
                code: 200
            }
        );
    } else {
        res.status(400).send(
            {
                data: [],
                code: 400
            }
        );
    }
}