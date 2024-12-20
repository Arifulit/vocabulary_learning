const Banner = () => {
    return (
        <div>

            <div className="carousel mt-[4.5rem] w-full  sm:h-[60vh] lg:h-[70vh] " data-aos="fade-up">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img
                        src="https://www.98thpercentile.com/hubfs/Digital%20tools%20to%20aid%20vocabulary%20expansion%20for%20english%20learners%20%281%29%20%281%29.png"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full ">
                    <img
                        src="https://websitecmscdn.s3.ap-south-1.amazonaws.com/education_vocabulary_c3736d1c68.webp"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>

                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full ">
                    <img
                        src="https://www.researchgate.net/publication/385623258/figure/fig1/AS:11431281289113445@1730999049364/mportance-of-vocabulary-learning.png"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;