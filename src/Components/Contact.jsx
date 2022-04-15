import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>Har du frågor?</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md 5 d-flex justify-content-center">
                        <img src="/assets/images/contact.jpg" alt="Contact Us" height="300px" width="300px" />
                    </div>
                    <div className="col-md-6">
                        <form >
                            <div class="mb-3">
                                <label for="exampleForm" class="form-label">Namn</label>
                                <input type="text" class="form-control" id="exampleForm" placeholder="Kalle Svensson"/>
</div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">E-post</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="namn@exempel.se"/>
</div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Ditt meddelande</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                                </div>
                                <button type="submit" class="btn btn-outline-primary">Skicka meddelandet</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
            )
}

            export default Contact
