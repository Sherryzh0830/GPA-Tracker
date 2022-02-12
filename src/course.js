import './course.css'
export default function Course(){
    const courseInfo = [
        { id: 1, courseName: "Chemistry", courseNum: "101"},
        { id: 2, courseName: "Physics", courseNum: "102" },
        { id: 3, courseName: "Math", courseNum: "103" }
    ];
    const content = ["Problem Set","Quiz","Lab","Tutorial","Mid-term","Final"];

    return (
        <div>
          
        {courseInfo.map((value) => {
            return (
              <div>
                <h2>{value.courseName} {value.courseNum}</h2>
                <table className="table">
                  <tr>
                    <th>Problem Set</th>
                    <th>Quiz</th>
                    <th>Lab</th>
                    <th>Tutorial</th>
                    <th>Mid-term</th>
                    <th>Final Exam</th>
                  </tr>
                  <tr>
                    <td>XX</td>
                    <td>XX</td>
                    <td>XX</td>
                    <td>XX</td>
                    <td>XX</td>
                    <td>XX</td>
                  </tr>
                </table>
                
              </div>
            );
          })}
        </div>
    );
    
}
