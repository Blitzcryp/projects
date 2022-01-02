export default function Card({ name, link, description }) {
    return (
        <>
            <a href={  link  }>
                <h2>{  name  }</h2>
            </a>
            <p>
                { description }
            </p>
        </>
   );
}