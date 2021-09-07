import React from 'react';
import SvgBook from './svg/svg_book';
import SvgZoom from './svg/svg_zoom';

const lectures = [
  {
    title: "Communication 371",
    lecturer: "Brianna Quintero",
    lecture_time: "T _ 10:00am - 12:00pm",
    zoom_link: "https://sdsu.zoom.us/w/84202609603?tk=xMTCL0cqikg4PAd1EipY3PbHAsD2dcDFnjRPIeRR-gk.DQMAAAATmt3bwxY2R2ktVmdiQlFQbW4tM2dKQ1VZazFBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    book_link: "http://libgen.lc/get.php?md5=6d03258cedf71d89f021096f3aa2a814&key=CF7H4XOER62ZKVA3"
  },
  {
    title: "Computer Engineering 475",
    lecturer: "Tsotne Putkaradze",
    lecture_time: "T, TH _ 12:30pm - 13:45pm",
    zoom_link: "https://SDSU.zoom.us/j/81155571361",
    book_link: "http://libgen.lc/get.php?md5=bf92e117d9d57bc204f80be9d4f6f712&key=F05EE3CIW8P7VWQT"
  },
  {
    title: "Computer Engineering 470 Lab G2",
    lecturer: "Tsotne Putkaradze",
    lecture_time: "F _ 13:30pm - 16:30pm",
    zoom_link: "https://SDSU.zoom.us/j/89139352499",
    book_link: ""
  },
  {
    title: "Electrical Engineering 420",
    lecturer: "Giorgi Veshapidze",
    lecture_time: "T, TH _ 16:00pm - 17:15pm",
    zoom_link: "https://us02web.zoom.us/j/87896675579?pwd=NlFOeUF6bW11NEp2NkxGNkNTZDdYQT09",
    book_link: ""
  },
  {
    title: "Electrical Engineering 440",
    lecturer: "Giorgi Ghvedashvili",
    lecture_time: "M, W _ 17:30pm - 18:45pm",
    zoom_link: "https://SDSU.zoom.us/j/2339189286",
    book_link: "http://libgen.lc/get.php?md5=61a3afef94b4be4ad2ab33a633e83079&key=7TWKN52EGHUHWZNJ"
  },
  {
    title: "Electrical Engineering 458",
    lecturer: "Levan Shoshiashvili",
    lecture_time: "T, TH _ 18:00pm - 19:15pm",
    zoom_link: "https://SDSU.zoom.us/j/92840464767?pwd=eWR2bTNXN0cxK0xHUU5BYmgvRnEwZz09",
    book_link: "http://libgen.lc/get.php?md5=1cd4dfdf783e33e179da5e148cd2bb49&key=E4U75CBY3KYZYXRB"
  },
  {
    title: "Electrical Engineering 496",
    lecturer: "Giorgi Veshapidze",
    lecture_time: "TH _ 14:00pm - 15:30pm",
    zoom_link: "https://us02web.zoom.us/j/84975086212?pwd=VnppbHVVTkp6SU1sanBsOTFHb3lpZz09",
    book_link: ""
  },
];

function App() {
  return (
    <div className="max-w-screen-lg m-auto">
      <h1 className="py-4 text-xl font-bold text-center text-white bg-red-500">SDSU FALL 2021 - EE</h1>
      <div className="flex-1 m-2">
        {lectures.map(lecture => {
          return (
              <div className="relative px-4 py-4 mb-2 border rounded">
                <h3 className="my-2 font-bold">{lecture.title}</h3>
                <div className="mx-2">
                  <div className="text-sm">{lecture.lecturer}</div>
                  <div className="text-sm">{lecture.lecture_time}</div>
                </div>
                <div className="flex mt-2 space-x-1">
                  <a href={lecture.zoom_link} className="inline-block p-3 transition bg-blue-500 rounded-full hover:bg-blue-800" target="_blank" rel='noopener noreferrer'><SvgZoom/></a>
                  {lecture.book_link !== "" && (
                  <a href={lecture.book_link} className="inline-block p-3 transition bg-red-500 rounded-full hover:bg-red-800" target="_blank" rel='noopener noreferrer'><SvgBook/></a>
                  )}
                </div>
              </div>
          );
          })}
      </div>
    </div>
  );
}

export default App;
