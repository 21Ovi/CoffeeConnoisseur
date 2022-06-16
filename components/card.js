import Link from "next/link";
import Image from "next/image";
import cls from "classnames";

import styles from "./card.module.css";

const Card = (props) => {
  return (
    <div>
      <Link href={props.href}>
        <a className={styles.cardLink}>
          <div className={cls("glass", styles.container)}>
            <div className={styles.cardHeaderWrapper}>
              <h2 className={styles.cardHeader}>{props.name}</h2>
            </div>
            <div className={styles.cardImageWrapper}>
              <Image
                className={styles.cardImage}
                src={props.imgUrl}
                width={260}
                height={160}
                alt=""
              />
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Card;
