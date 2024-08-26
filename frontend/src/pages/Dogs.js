import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Dogs() {
    return (
        <div>

            <div className="content">
                <h1>Dogs</h1>
                <p className="content">
                    If you own a dog, it is crucial to ensure that you take good care of it. Pay attention to what you feed your dog and give it plenty of opportunity to exercise. On this website, you may learn more about how to take care of your pets at different stages of their lives.
                </p>
                <img className="petpic" src="/images/two-dogs.png" alt="two dogs sitting together" />
                <h2>Diet and Exercise</h2>
                <p className="content">
                    Dogs should typically be fed fewer meals as they get older during the course of their lifetimes. Puppies should be breastfed for the first two months before being weaned onto three meals a day at roughly the three to six month mark. When they are between the ages of six months and one year, their food consumption should be decreased to two meals per day, and once they are one year old, it should be lowered to just one meal. And between 60 and 70 percent of a dog's usual body weight is water. Make sure to keep your dog hydrated because, according to the ASPCA, even a 10% reduction in body fluids can result in disease or death.
                </p>
                <p className="content">
                    Dogs, like people, require sunlight and fresh air in addition to a fair amount of activity to maintain the health of their organs. The minimum amount of activity that is advised varies widely depending on breed and size, but generally speaking, 30-120 minutes of exercise each day are advised! Can you picture working out for two hours every day? Okay, I understand that won't disturb some of the readers. But I shiver just thinking about it! By the way, exercising your dog does not entail that you are being forced to participate in a push-up competition. Even quick strolls are acceptable! Toys that promote physical activity are also available; just make sure they are age-appropriate and do not contain any harmful materials. Be sure to pay special attention to toys that require supervision.
                </p>
            </div>

        </div>
    );
}

export default Dogs;
