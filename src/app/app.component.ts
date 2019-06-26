import { Component } from '@angular/core';


export class Student{
  StudentID:number;
  Response:string;
  id:string;
}
const StudentArray:Student[]=[
  { StudentID: 1, Response: "Chandan Kumar", id: "001" },
  { StudentID: 2, Response: "Ajeet Kumar", id: "002" },
  { StudentID: 3, Response: "Rahul Kumar", id: "003" },
]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 
export class AppComponent {
  StudentCollection=StudentArray;
  selectedStudent:Student={StudentID:0,Response:"",id:""};
  OPenForEdit(student:Student): void{
this.selectedStudent=student;
  }
  AddorEdit(): void{
    if(this.selectedStudent.StudentID==0) //insert method
    {
      this.selectedStudent.StudentID = Math.max.apply(Math, this.StudentCollection.map(function (x) { return x.StudentID; })) + 1;
      this.StudentCollection.push(this.selectedStudent);
    }
    this.selectedStudent = { StudentID: 0, Response: "" , id: ""};
  }
   Delete(): void{
    this.StudentCollection = this.StudentCollection.filter(x => x != this.selectedStudent);
    this.selectedStudent = { StudentID: 0, Response: "" , id: ""};
  }
}

         