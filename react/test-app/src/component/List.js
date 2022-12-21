import React from "react";

import {Table} from "reactstrap";

export class List extends React.Component{
    constructor() {
        super();
        this.state = {
            student: [
                {
                    id:"1",
                    name: "Long",
                    age: "1998",
                    gender: "Nam",
                    class: "C0422g1"
                },
                {
                    id:"2",
                    name: "Nhân",
                    age: "1994",
                    gender: "Nam",
                    class: "C0422g1"
                },
                {
                    id:"3",
                    name: "Trường",
                    age: "1997",
                    gender: "Nam",
                    class: "C0422g1"
                },
                {
                    id:"4",
                    name: "Trí",
                    age: "1998",
                    gender: "Nam",
                    class: "C0422g1"
                }
            ]
        }
    }

    render() {
        return(
            <div>
                <Table striped>
                    <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Age
                        </th>
                        <th>
                            Gender
                        </th>
                        <th>
                            Class
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.student.map((student,i)=>
                     <tr>
                        <th scope="row">
                            {student.id}
                        </th>
                        <td>
                            {student.name}
                        </td>
                        <td>
                            {student.age}
                        </td>
                        <td>
                            {student.gender}
                        </td>
                        <td>
                            {student.class}
                        </td>
                     </tr>
                    )}
                    </tbody>
                </Table>
            </div>
        );
    }
}
