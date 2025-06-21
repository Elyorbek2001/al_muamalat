// src/component/Reviews/Reviews.jsx



const Reviews = () => {
    return (

        <div>
            <div className='w-full text-center px-8 md:px-32'>
                <h1 className="text-4xl font-bold mb-8">What students say</h1>
                <div className="w-full flex flex-col items-center justify-center gap-4">
                    <p className="py-4 max-w-2xl">
                        Our team consists of seasoned professionals with extensive experience in Islamic finance and management. Each member brings a unique set of skills and expertise.
                    </p>
                </div>
                <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-start gap-7 py-8">
                    <div className="card_one text-[17px] p-8 border shadow-lg rounded-lg">
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.</p>
                    </div>
                    <div className="card_one text-[17px] p-8 border shadow-lg rounded-lg">
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.</p>
                    </div>
                    <div className="card_one text-[17px] p-8 border shadow-lg rounded-lg">
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Reviews
