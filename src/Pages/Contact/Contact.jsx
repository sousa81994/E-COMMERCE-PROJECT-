import React from 'react';
import Button from '../../components/Button/Button';

const Contact = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>Have Some Questions?</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 d-flex justify-content-center my-2 py-2">
                        <img src="https://bazoo.info/wp-content/uploads/2020/09/header-Contact-us.jpg" alt="Contact Us" height="300px" width="400px" />
                    </div>
                    <div className="col-md-6 my-2 py-2">
                        <form>
                            <div class="mb-3">
                                <label for="exampleForm" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleForm" placeholder="Andrew Garfield"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                            </div>
                            <Button type="submit">Send Message</Button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contact;
