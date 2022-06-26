import axios from 'axios';
import React, { useEffect, useState } from 'react';


const CollegeDB = () => {
    const [college, setCollege] = useState();

    useEffect(() => {
        axios.get('http://localhost:8000/college')
            .then(res => {
                console.log(res.data);
                setCollege(res.data);
            })
    }, [])
    let i = 1;
    if (college) {
        return (
            <div>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">College Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            college.map(ele => {
                                return (
                                    <tr>
                                        <th scope="row">{i++}</th>
                                        <td>{ele.college}</td>
                                        <td>{ele.email}</td>
                                        <td>{ele.pass}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        )
    }
}

export default CollegeDB