import React from 'react'
import {Link } from 'react-router-dom'

function EditContact() {
    return (
        <div>
            <section className="add-contact p-3">
                <div className="container ">
                    <div className="row">
                        <div className="col">
                            <p className="h4 text-primary fw-bold">Edit Contact</p>
                            <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum esse rem dicta pariatur, consectetur eligendi incidunt iste veniam eius voluptatem!</p>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-4">
                                <form action="">
                                    <div className="mb-2">
                                        <input type="text" className='form-control' placeholder="Name"/>
                                    </div>
                                    <div className="mb-2">
                                        <input type="text" className='form-control' placeholder="Photo Url"/>
                                    </div>
                                    <div className="mb-2">
                                        <input type="number" className='form-control' placeholder="Mobile"/>
                                    </div>
                                    <div className="mb-2">
                                        <input type="email" className='form-control' placeholder="E-mail"/>
                                    </div>
                                    <div className="mb-2">
                                        <input type="text" className='form-control' placeholder="Company Name"/>
                                    </div>
                                    <div className="mb-2">
                                        <input type="text" className='form-control' placeholder="Title"/>
                                    </div>
                                    <div className="mb-2">
                                        <select name="" id="" className="form-control">
                                            <option value="">Select a Group</option>
                                        </select>
                                    </div>
                                    <div className="mb-2">
                                        <input type="submit" className='btn btn-primary' value="Update"/>
                                        <Link to ={'/contacts/list'} className='btn btn-dark ms-2'>Cancel</Link>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-6">
                                <img src="http://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png" className='contact-img' alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default EditContact