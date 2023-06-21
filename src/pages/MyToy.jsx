import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import AddingRow from './AddingRow';

const MyToy = () => {

    const { user } = useContext(AuthContext);
    const [adding, setAdding] = useState([])

    const url = `https://assingment11-server-arafatrahman862.vercel.app/addtoys?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAdding(data))
    }, [url])

    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete')
        if (proceed) {
            fetch(`https://assingment11-server-arafatrahman862.vercel.app/addtoys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('deleted successful')
                        const remaining = adding.filter(adding => adding._id !== id)
                        setAdding(remaining)
                    }
                })
        }
    }

    const handleAddingConfirm = id => {
        fetch(`https://assingment11-server-arafatrahman862.vercel.app/addtoys/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = adding.filter(adding => adding._id !== id)
                    const updated = adding.find(adding => adding._id === id)
                    updated.status = 'confirm'
                    const newAdding = [updated, ...remaining]
                    setAdding(newAdding)
                }
            })
    }


    return (
        <div className='text-black bg-slate-50'>
            <div className="md:overflow-x-auto md:w-full">
                <table className="table  w-full">
                    {/* head */}
                    {/* <thead>
                        <tr>

                            <th>Name</th>
                            <th>seller_name</th>
                            <th>seller_email</th>
                            <th>available_quantity</th>
                            <th>rating</th>
                            <th>sub_category</th>
                            <th>price</th>
                            <th>detail_description</th>
                        </tr>
                    </thead> */}
                    <tbody >
                        {
                            adding.map(adding => <AddingRow
                                key={adding._id}
                                adding={adding}
                                handleDelete={handleDelete}
                                handleAddingConfirm={handleAddingConfirm}
                            ></AddingRow>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToy;