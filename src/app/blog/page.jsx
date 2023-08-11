import Image from 'next/image';

import content from 'raw-loader!../../../blogs/hello.html';
import style from 'raw-loader!../../../blogs/blogs.css';

export default function() {
  var html = "<html><head><style>" + style + "</style></head><body><div class='content'>" + content + "</div></body></html>";
  return (
    <iframe src={"data:text/html," + html}></iframe>
  );
};
