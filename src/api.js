
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import {listCourses} from './graphql/queries'
import {createHole, createCourse} from './graphql/mutations'
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);



const fetchAllCourses = async () => {
  try{
    const response = await API.graphql(graphqlOperation(listCourses));
    const courses = response.data.listCourses.items;
    console.log("Successfully fetched courses, ", courses);
    return courses;
  } catch (error) {console.log("error in fetchAllCourses: " + error)}
}

const createGolfCourse = async (name, holes) => {
    const holeIDs = [];
    try{
        for (const hole of holes){
            const holeResponse = await API.graphql(graphqlOperation(createHole, {input: hole}));
            holeIDs.push(holeResponse.data.createHole.id);
            console.log("Successfully created Hole: ", hole);
        }
        const courseResponse = await API.graphql(graphqlOperation(createCourse, {input: {name: name, holeIds: holeIDs}}));
        console.log("Successfully created Course: ", courseResponse.data.createCourse);

    } catch (error) {
        console.log("Error in createGolfCourse: ", error);
    }
}

    


export {
  fetchAllCourses, 
  createGolfCourse,
}





  


