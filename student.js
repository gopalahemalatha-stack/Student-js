let numberofstudents=number(prompt("enter of numbers"))
let passedstudents=0
let failedstudents=0
for(let student=1;students<=Numberofstudents;student++)
{
   let name=prompt("enter student name")
   let english=number(prompt("enter of english marks"))
   let telugu=number(prompt("enter of telugu marks"))
   let hindi=number(prompt("enter of hindi marks"))
   let social=number (prompt("enter of social marks"))
   let scenice=number(prompt("enter of scenice of marks"))
   let total=english+telugu+hindi+social+scenice;
   let avg=total/5;
   let percentage=(total/500)*100;
   let result;
   if(english>=35&&telugu>=35&&hindi>=35&&social>=35&&scenice>=35)
      {
        result=pass;
        passedstudents++;
      }
   else
      {
        result=fail;
        failedstudents++;
      }
    let grade;
   if(result==fail)
   {
     grade="fail"
    }
   else if(percentage>=90)
    {
      grade="A"
    }
    else if(percentage>=80)
    { 
      grade="B"
     }
    else if (percentage>=70)
    {
      grade="C"
     }
    else if (percentage>=60)
    { 
      garde="d"
    }
     else if(percentage>=50)
      { 
        grade="E"
       }
      else
       { 
          grade="fail"
        }
  console.log("result:"+result);
  console.log("student name:"+name);
  console.log("english:"+english);
  console.log("telugu:"+telugu);
  console.log("hindi:"+hindi);
  console.log("social:"+social);
  console.log("scenice:"+scenice);
   console,log("totalmarks:"+total);
   console.log("avg:"+avg);
   console.log("percentage:"+percentage);
  console.log("result:"+result);
   console.log("grade:"+grade);
}
console.log("number of students:"+ numberofstudents);
console.log("passed students:"+ passedstudents);
console.log("failed students:"+failedstudents);           