import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Articles = () => {
  const { handleLogout } = useContext(AuthContext);

  return (
    <>
      <h2>Articles</h2>
      <ul>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
          corrupti laboriosam omnis pariatur repellendus corporis dolores! Minus
          ullam error odit quidem incidunt modi sint nisi enim, non, ducimus,
          aut neque.
        </li>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
          tenetur dicta veritatis ducimus, ut eaque earum dolorum modi ad sit
          ipsa, distinctio animi vero adipisci libero non id! Eum, veritatis.
        </li>
        <li>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          libero quibusdam harum iusto vero necessitatibus illo magnam modi esse
          non corporis culpa ipsum fuga atque nisi asperiores aliquam ipsam a!
        </li>
      </ul>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};
