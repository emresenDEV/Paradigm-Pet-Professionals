import React from 'react';

function Birds() {
    return (
        <div>

            <div className="content">
                <h1>Birds</h1>
                <img className="petpic" src="/images/bird.png" alt="A yellow and gray bird sitting in the ledge of its cage" />
                <p className="content">
                    Birds are particularly fascinating creatures because they can be as small as a Cuban bee hummingbird, which is about two inches long and weighs a little over one twentieth of an ounce, or as big as an ostrich. While the majority of birds can fly, some cannot. Each breed of bird is amazing and distinct in its own way, especially in terms of its demands in terms of relationships and overall wellbeing. Unfortunately, sorrow and depression can affect birds just like they can humans. Your bird's depression could have a number of underlying causes, including a disease (either physical or mental), losing a companion, or growing bored. The following symptoms may be used to determine whether your bird is depressed:
                </p>
                <ul className="catlist">
                    <li>Decreased appetite</li>
                    <li>Increased irritability</li>
                    <li>Aggressive Behavior</li>
                    <li>Songs take on a different, gloomy tone</li>
                </ul>
                <p className="content">
                    If you notice any indications of any of these symptoms, be sure to let your veterinarian know. Like many illnesses, your bird's longevity may be significantly increased by recognizing and treating the symptoms early.
                </p>
                <p className="content" style={{ fontWeight: 550 }}>
                    For specialized bird advice, kindly <a href="/contact">reach out</a> and one of our Pexperts will get back to you within 24-48 hours.
                </p>
            </div>

        </div>
    );
}

export default Birds;
