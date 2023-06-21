import React from 'react';

const Review = () => {
    return (
        <div className=''>
            <p className='text-center md:text-4xl my-12 '>Customers Reviews</p>

            <div className='flex justify-between p-4 md:w-3/4 w-[60%] md:gap-6 gap-4 md:mx-auto'>
                <div>
                    <img className='md:w-28 w-20 mx-auto rounded-full' src="https://data.cubika.toys/assets/cache_image/media/reviews/kids-retail-concept_768x0_8cf.png" alt="" />
                    <p className='font-bold md:text-3xl text-md text-center'>Kids Retail Concept, Romania</p>
                    <p className='text-sm text-center my-3'>Dec 28, 2021</p>
                    <p>For over 5 years we have been honored to be the representatives of the Cubika and Puzzlika brands in Romania. The products have always been at the highest level of quality and we have always enjoyed the fact that the Cubika team is constantly striving to bring new and very attractive products to the range. We are happy to be part of the Levenya team and I would like to thank Nicholas and Vitalyi for the extraordinary partnership we have and for the trust and support they have given us from the beginning.</p>
                </div>
                <div>
                    <img className='md:w-28 w-20 mx-auto rounded-full' src="https://data.cubika.toys/assets/cache_image/media/reviews/photo-2021-11-23-10-48-39_768x0_0b2.jpg" alt="" />
                    <p className='font-bold md:text-3xl text-md text-center'>MagicBaby, Czech Republic</p>
                    <p className='text-sm text-center my-3'>Sep 28, 2021</p>
                    <p>The goods of the CUBIKA and Puzzlika brands have very high-quality and precise processing, pleasing design and are completely affordable, which is why they quickly found their place on our market. From a business point of view, we can only recommend these brands to everyone, because we do not even have to deal with proper complaints. In addition, Levenya is a very good business partner and provides us with quality service.</p>
                </div>
                <div>
                    <img className='md:w-28 w-20 mx-auto rounded-full' src="https://data.cubika.toys/assets/cache_image/media/otc-logo_768x0_8cf.png" alt="" />
                    <p className='font-bold md:text-3xl text-md text-center'>Old Teddy's Company, Spain</p>
                    <p className='text-sm text-center my-3'>Sep 27, 2021</p>
                    <p>Before introducing a new brand in the Spanish market, we make sure that it represents our company values. In this sense, Cubika and Puzzlika outstand for they produce high-quality sustainable toys and games with great educational and ludic content. The building blocks, wooden towers, jigsaws, threading games, mosaics or imitation games, all in wood from sustainable forests or from FSC cardboard, and with non-toxic, vegan paint, are perfect in terms of design and play value.</p>
                </div>
            </div>
        </div>
    );
};

export default Review;