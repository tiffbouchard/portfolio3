import * as React from "react";
import { Helmet } from "react-helmet";
import "./all.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

const Temp = () => {
  const { title, description } = useSiteMetadata();
  return (
    <div className="layout">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/favicon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/favicon.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/favicon.png`}
        />
      </Helmet>
      <div class="temp-con">
        <p>Tiffany Bouchard</p>
        <br/>
        <p>I’m a developer based in Toronto passionate about building design conscious digital experiences.</p>     
        <br/>
        <p>Specializing in UX/UI design, Web Design and Development. Currently building with React and Angular, designing in Figma and learning Blender. Interested in exploring VR, Unity, and creative coding.</p>
        <br/>
        <p>Full portfolio is a WIP.</p>
        <br/>
        <a href="https://www.are.na/tiffany-bouchard" target="_blank">Are.na</a> <a href="https://cakebagel.tumblr.com/" target="_blank">Tumblr</a><a href="https://instagram.com/tiffbouchard" target="_blank">Instagram</a> <a href="https://github.com/tiffbouchard" target="_blank">Github</a> <a href="https://drive.google.com/file/d/1NQRMw9t1lKef9hK86MgaM6FerFGTvT5n/view" target="_blank">CV</a><a href="mailto:tiffnbouchard@gmail.com">Contact</a>
      </div>
    </div>
  );
};

export default Temp;
