import { useEffect, useState } from "react";
import "/src/Ecommerce/ecommerce.css"


function About(){

    const [about , setAbout] = useState("");
    const paragraphs = 30;

    useEffect(() => {
        fetch("https://api.api-ninjas.com/v1/loremipsum?paragraphs=" + paragraphs, {
          headers: { "X-Api-Key": "c9ZTfhk8rHq7hD/NZO6kIA==o3oqSCRRtiQ1eVxS" },
        })
          .then((res) => res.json())
          .then((result) => 
            setAbout(result.text))
      }, []);


    return(
        <>
            <main>
                <h1>About</h1>
                <div className="about">
                    {
                        about.split("\n").map((para, index) => {
                            return <p key={index}>{para}</p>;
                        })
                    }
                </div>
            </main>
        </>
    );
    
}

export default About;