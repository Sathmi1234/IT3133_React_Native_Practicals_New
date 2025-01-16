import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import { courses, subjects } from './StudentsDb'

export default function Profile({ route }) {
    const { student } = route.params;
    const navigation = useNavigation();
    const userCourse=courses.find((course)=>course.id===student.course_id)
    const courseSubject = subjects.filter((subject)=>userCourse.id===subject.course_id)
    console.log(courseSubject)
    return (
        <View style={styles.container}>
            <Text>Name: {student.name}</Text>
            <Text>Age: {student.age}</Text>
            <Text>Gender: {student.gender}</Text>
            <Text>Phone: {student.phone}</Text>
            <Text>Email: {student.email}</Text>
            <Text>Blood Group: {student.blood_group}</Text>
            <Text>Course: {userCourse.name}</Text>
            {
                courseSubject.map((item,index)=>(
                    <View>
                        <Text>{item.name}</Text>
                    </View>
                ))
            }
            <Button onPress={() => navigation.navigate("UpdateStudent", { student })}>
                Edit Student
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
