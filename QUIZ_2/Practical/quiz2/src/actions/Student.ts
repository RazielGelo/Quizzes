import Student from "@/interfaces/Student";
import { MongoClient } from "mongodb";

const students: Student[] = [
	{
		studentID: '#000450571',
		firstName: 'Angelo',
		lastName: 'Guerra',
		dob: '1986-19-03',
		age: 36,
		email: 'angeloguerra@vcc.ca'
	},
	{
		studentID: '#000451738',
		firstName: 'Emil',
		lastName: 'Sangil',
		dob: '1991-20-08',
		age: 31,
		email: 'emilsangil@vcc.ca'
	}
];

/**
 * function that gets you the snakes in the system
 * @returns an array of snakes
 */
export  function getAllStudents(client: MongoClient) {
	return client.db().collection('students').find();
	// return students;
}

export  function getOneStudent(client: MongoClient, id: String) {
	return client.db().collection('students').findOne(id);
	// return one Student;
}

export async function createStudent(client: MongoClient, student: Student) {
	const { id, studentID, firstName, lastName, dob, age, email } = student;
	// validate a student!
	if (!studentID || !firstName || !lastName || !dob || !age || !email || id) {
		throw {
			code: 400,
			message: 'Invalid Student Data'
		};
	}

	// at this point, the student is valid!
	// return the document which is the inserted student!
	return client.db().collection('students').insertOne(student);
}