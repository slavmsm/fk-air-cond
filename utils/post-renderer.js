// ./frontend/src/app/[lang]/utils/postRenderer.js

import RichText from "../components/RichText";
import ImageSlider from "../components/ImageSlider";
import Quote from "../components/Quote";
import Media from "../components/Media";
import VideoEmbed from "../components/VideoEmbed";

export function postRenderer(section, index) {
  switch (section.__component) {
    case "shared.rich-text":
      return { component: RichText, key: index, props: { data: section } };
    case "shared.slider":
      return { component: ImageSlider, key: index, props: { data: section } };
    case "shared.quote":
      return { component: Quote, key: index, props: { data: section } };
    case "shared.media":
      return { component: Media, key: index, props: { data: section } };
    case "shared.video-embed":
      return { component: VideoEmbed, key: index, props: { data: section } };
    default:
      return null;
  }
}
