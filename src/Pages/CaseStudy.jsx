import { useParams } from "react-router-dom";
import websites from "../data/websites";

function CaseStudy() {
    const { slug } = useParams();

    const site = websites.find(item =>
        item.link === `/case-study/${slug}`
    );

    if (!site) {
        return <h1>Case Study Not Found</h1>;
    }

    return (
        <div>
            <h1>{site.title}</h1>
            <img src={site.main} alt={site.title} />
            <p>{site.desc}</p>
        </div>
    );
}

export default CaseStudy;