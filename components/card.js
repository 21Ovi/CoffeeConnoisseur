import Link from "next/link";
import Image from "next/image";

const Card = (props) => {
  return (
    <div>
      <Link href={props.href}>
        <a>
          <h2>{props.name}</h2>
          <Image src={props.imgUrl} width={260} height={160} alt="" />
        </a>
      </Link>
    </div>
  );
};

export default Card;
