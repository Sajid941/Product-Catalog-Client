import 'animate.css';

const Banner = () => {
    return (
        <div className="carousel w-full my-10 rounded-xl hidden">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="grid grid-cols-2 p-2 md:p-20 justify-center items-center">
                    <div className="col-span-1 space-y-2">
                        <h1 className=" md:text-5xl font-bold animate__animated animate__bounce">Apple iPhone 13 Pro</h1>
                        <p className="text-[10px] md:text-xl text-gray-400">The latest iPhone featuring advanced camera systems, Super Retina XDR display, and A15 Bionic chip</p>
                    </div>
                    <img  src="https://i5.walmartimages.com/seo/Like-New-Apple-iPhone-13-Pro-Max-A2484-128GB-Blue-US-Model-Factory-Unlocked-Cell-Phone_6ba1f90b-3b76-4e73-bb5c-8e353d988df0.de5842bcd17198be175ce2c6486b140c.jpeg" className="" />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
            <div className="grid grid-cols-2 p-2 md:p-20 justify-center items-center">
                    <div className="col-span-1 space-y-2">
                        <h1 className=" md:text-5xl font-bold">Sony WH-1000XM4 Wireless Headphones</h1>
                        <p className="text-[10px] md:text-xl text-gray-400">Industry-leading noise cancellation, stunning sound quality, and smart listening features</p>
                    </div>
                    <img  src="https://www.digitaltrends.com/wp-content/uploads/2020/08/sony-wh-1000xm4-00003.jpg?fit=1200%2C9999&p=1" className="" />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
            <div className="grid grid-cols-2 p-2 md:p-20 justify-center items-center">
                    <div className="col-span-1 space-y-2">
                        <h1 className=" md:text-5xl font-bold">Fitbit Charge 5 Fitness Tracker</h1>
                        <p className="text-[10px] md:text-xl text-gray-400">Track your activity, monitor your health, and stay motivated with the Fitbit Charge 5</p>
                    </div>
                    <img  src="https://cdn.mos.cms.futurecdn.net/FoA2Dk67tiErG7BGkbZPyE-1200-80.jpg" className="" />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;