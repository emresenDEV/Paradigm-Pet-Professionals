import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Cats() {
    return (
        <div>

            <div className="content">
                <h1>Cats</h1>
                <p className="content">
                    Cats are currently the second most common domestic pet in the United States. Although there are over 60 distinct recorded cat breeds, each breed may require a different type of care and diet. Nevertheless, certain lifestyle choices and dietary habits are generally advised for the health of your fluffy family member, regardless of breed.
                </p>
                <img className="petpic" src="/images/calico-cat.png" alt="calico cat on a couch" />

                <h2>Zero to Four Weeks</h2>
                <p className="content">
                    If at all possible, the queen (a phrase used to describe a female cat that is either pregnant or nursing) should directly nurse her young. Make sure your kitten's growth is continuing steadily by keeping a close eye on it. A caregiver may need to feed a kitten directly using a bottle or a feeding tube if it is not growing at a satisfactory rate. The following are a few causes why kittens might not put on the proper amount of weight:
                </p>
                <ul className="catlist">
                    <li>Gastrointestinal illness</li>
                    <li>Environmental factors including excessive heat or cold or filthy environments</li>
                    <li>Too many other siblings vying for mom's milk</li>
                </ul>

                <h2>Four Weeks to One Year</h2>
                <img className="petpic" src="/images/black-cat.png" alt="black cat outside in the grass next to a bird" />
                <p className="content">
                    Around three to four weeks after birth, kittens can begin receiving soft moist kitten food. The ASPCA recommends that kittens this age consume between a half and a cup of dry kitten food or between six and nine ounces of wet food per day. A small amount of water can be added to the food to soften it if your kitten has trouble chewing on hard food. The extra nutrients required for growth, energy, and wellness are included in cat food that has been specially formulated for kittens. Your cat may require a different diet depending on its breed. For advice, you should always speak with your veterinarian.
                </p>

                <h2>One Year to Seven Years</h2>
                <p className="content">
                    When kittens reach this stage, they no longer require as many nutrients and are more like cats. Their level of activity and metabolism both decline as they get older. It is not advisable to leave cat food out all day. Instead, give them food a few times a day so they can eat meals rather than snacks all day long. This method lowers the possibility of feline obesity and other weight-related diseases.
                </p>
                <img className="petpic" src="/images/adopt-cat.png" alt="black cat in a crate" />

                <h2>Seven Years and More</h2>
                <p className="content">
                    Similar to many other living things, the body starts to decay and go through various changes. At this age, cats should consume less calories and fats and more high-quality proteins. This means that rather than just looking for foods in a certain category, search for foods that specifically identify a protein (such as "salmon") when you buy packaged foods for your cat (such as fish). This typically indicates that they are byproducts or mixtures of proteins of lower grade.
                </p>
                <p className="content" style={{ fontWeight: 550 }}>
                    For a customized meal plan and specialized cat advice, kindly <a href="/contact">reach out</a> and one of our Pexperts will get back to you within 24-48 hours.
                </p>
            </div>

        </div>
    );
}

export default Cats;
