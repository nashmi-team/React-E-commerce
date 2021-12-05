import React from 'react'
import './reviews.css'

const reviews = [{
    id: 1,
    name: 'Иван Иванов',
    text: 'Всем привет! Я пришел в компанию в очередной раз',
    imgSrc: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
    position: 'Android разработчик'
}, {
    id: 2,
    name: 'Петр Петров',
    text: 'Всем привет! Я пришел в компанию в очередной раз',
    imgSrc: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
    position: 'Android разработчик'

},
]

export const Reviews = () => {
    return (<>

        <div className="container-xl ">
            <div className="row">
                <div className="col-sm-12">
                    <h2>What <b>our customers</b> are saying</h2>
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                                <div className="row reviews-section">
                                    {reviews.map(review => (<div className="col-sm-6" key={review.id}>
                                        <div className="media">
                                            <img src={review.imgSrc} className="mr-3" alt=""/>
                                            <div className="media-body">
                                                <div className="testimonial">
                                                    <p>{review.text}</p>
                                                    <p className="overview">
                                                        <b>{review.name}</b>, {review.position}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>))}
                                </div>

                    </div>
                </div>
            </div>
        </div>
    </>);
}

/*

                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="media">
                                                <img src="https://media.istockphoto.com/vectors/programmer-icon-profession-and-job-vector-illustration-vector-id1266224795?b=1&k=20&m=1266224795&s=170667a&w=0&h=S8Kpf_UHZsjJmpisiZJUuJV9Dr_wjO_JJ-sPp6ESj0A=" className="mr-3" alt=""/>
                                                <div className="media-body">
                                                    <div className="testimonial">
                                                        <p>Lorem ipsum dolor sit amet, consec adipiscing elit. Nam
                                                            eusem scelerisque tempor, varius quam luctus dui. Mauris
                                                            magna metus nec.</p>
                                                        <p className="overview"><b>Paula Wilson</b>, Media Analyst</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
 */