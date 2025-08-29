"use client";

import { useRef ,useState, useEffect } from "react";
import React from "react";

type Track = {
  title: string;
  src: string;
};

export default function Home() {

const playlist: Track[] = [
    { title: "SONG 1", src: "/sounds/gameOST.mp3" },
    { title: "SONG 2", src: "/sounds/gameOST1.mp3" },
  ];

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  // เล่น / หยุด
  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrackIndex]);

  // ปรับเสียง
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // อัพเดทเวลา
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  // โหลดข้อมูลเพลง
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  // เปลี่ยนเพลง
  const changeTrack = (index: number) => {
    setCurrentTrackIndex(index);
    setCurrentTime(0);
    setIsPlaying(true);
  };

  // ฟอร์แมตเวลา mm:ss
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };






























  const characters = [
    {
      name: "KAZEMARU",
      stars: 5,
      description:
        "ซามูไรผู้แข็งแกร่งแห่งยุคโบราณ ผู้มีดาบคู่ใจที่ชื่อ “สายลมเหล็ก” (Iron Wind) KAZEMARU เติบโตขึ้นในหมู่บ้านเล็ก ๆ ที่ตั้งอยู่ท่ามกลางภูเขาและสายลมที่พัดแรง เขาได้รับการฝึกฝนศิลปะการต่อสู้และวิถีซามูไรอย่างเข้มงวดตั้งแต่วัยเด็ก ด้วยจิตใจที่สงบนิ่งและความมุ่งมั่นสูง KAZEMARU ได้สาบานว่าจะปกป้องผู้คนที่อ่อนแอกว่า และรักษาความยุติธรรมในโลกที่เต็มไปด้วยความวุ่นวาย แม้จะเผชิญกับศัตรูที่ทรงพลัง เขายังคงก้าวเดินด้วยความเร็วและความคล่องแคล่วดุจสายลม ทำให้คู่ต่อสู้แทบตามไม่ทัน เขาคือซามูไรแห่งสายลม ผู้ไม่เคยหวั่นไหวต่อพายุแห่งชะตากรรม",
      image: "/images/kaze.png",
      image1: "/images/kazeprofile.png",
    },

    {
      name: "SAKUHA",
      stars: 5,
      description: "คำอธิบายตัวละคร 3",
      image: "/images/sakuha.png",
      image1: "/images/sakuhaprofile.png",
    },

    {
      name: "AZU",
      stars: 4,
      description: "หญิงสาวผู้มีทักษะการลอบสังหารระดับยอดฝีมือ Azu เติบโตขึ้นในเงามืดของโลกใต้ดิน เธอถูกฝึกฝนมาตั้งแต่เด็กให้เป็นเครื่องมือสังหารที่ไร้ความปรานี ด้วยความเฉลียวฉลาดและความว่องไวเหนือมนุษย์ Azu ใช้ความเงียบและความลับเป็นอาวุธหลักในการทำภารกิจที่ยากที่สุด ความลับของเธอถูกปกปิดด้วยใบหน้าที่สงบนิ่งและแววตาที่เย็นชา แต่ภายในใจกลับเต็มไปด้วยความเจ็บปวดและอดีตที่ถูกลืม เธอเดินทางในเส้นทางของเงามืด เพียงเพื่อค้นหาความหมายของชีวิตและอิสรภาพจากพันธนาการแห่งอดีต",
      image: "/images/azu.png",
      image1: "/images/azuprofile.png",
    },
  ];





  const [selected, setSelected] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);





  // เมื่อ selected เปลี่ยน ให้เล่น fade out แล้ว fade in ใหม่
  useEffect(() => {
    
    setFadeIn(false);
    const timeout = setTimeout(() => {
      setFadeIn(true);
    }, 100); // delay นิดหน่อยก่อน fade in

    return () => clearTimeout(timeout);
  }, [selected]);


  const fadeStyle = 
  {
    transition: "opacity 0.5s ease-in-out",
    opacity: fadeIn ? 1 : 0,
  };










  return (
    

    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #ffffffff, #fadcdcff)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
      }}
    >

      
      <div
        style={{
          display: "flex",
          gap: "50px",
          maxWidth: "1400px",
          width: "100%",
        }}
      >
        
        

        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "#ffeb99",
              padding: "5px 15px",
              borderRadius: "20px",
              fontWeight: "bold",
              fontSize: "18px",
              ...fadeStyle,
            }}
          >
            ตัวละคร · อาวุธ
            <span
              style={{
                background: "#ff4d4d",
                color: "white",
                fontSize: "20px",
                padding: "3px 8px",
                borderRadius: "10px",
                marginLeft: "8px",
              }}
            >
              ใหม่
            </span>
          </div>


          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              marginTop: "30px",
              ...fadeStyle,
            }}
          >
            {characters[selected].name}
          </h1>

          <div
            style={{
              color: "gold",
              fontSize: "20px",
              margin: "10px 0",
              ...fadeStyle,
            }}
          >
            {"★".repeat(characters[selected].stars)}
          </div>

          <p
            style={{
              color: "#000000ff",
              fontFamily: "Arial, sans-serif",
              fontSize: "15px",
              marginTop: "10px",
              ...fadeStyle,
            }}
          >
            {characters[selected].description}
          </p>

          <button
            onClick={() => alert(`${characters[selected].name} : รายละเอียดเพิ่มเติม`)}
            style={{
              marginTop: "10px",
              background: "#3077c9ff",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              ...fadeStyle,
            }}
          >
            ดูรายละเอียด
          </button>

          

          <div style={{ display: "flex", gap: "10px", marginTop: "50px" }}>
            {characters.map((char, index) => (
              <img
                key={index}
                src={char.image1}
                alt={char.name}
                onClick={() => setSelected(index)}
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  border: selected === index ? "3px solid #ff9900ff" : "3px solid transparent",
                  transition: "transform 0.3s",
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              />
            ))}
          </div>

                        <div style={{ padding: 5, marginTop: 30,}}>
                          <h3>{playlist[currentTrackIndex].title}

                            <div className="spectrum-list paused" data-v-443f4e40="">
                              <div className="spectrum-item" data-v-443f4e40=""></div>
                              <div className="spectrum-item" data-v-443f4e40=""></div>
                              <div className="spectrum-item" data-v-443f4e40=""></div>
                              <div className="spectrum-item" data-v-443f4e40=""></div>
                              <div className="spectrum-item" data-v-443f4e40=""></div>


                              <style jsx>{`
                                spectrum1-443f4e40 animation {
      
                                }
                               
                                .spectrum-item {
                                  width: 0.1041666vw;
                                  height: 100%;
                                  background-color: #ff9900ff;
                                  margin-right: 0.1562499vw;
                                  border-radius: 2px;
                                  animation: spectrum1-443f4e40 1.5s infinite;
                                }


                                .spectrum-list {
                                  animation-play-state: paused;
                                }
                                  
                                .spectrum-list {
                                  width: .1041666vw;
                                  height: .520833vw;
                                  max-height: 1.4062491vw;
                                  margin-right: .1562499vw;
                                  background-color: #fff;
                                  border-left: 1px solid #b9b8b8ff;
                                  border-right: 1px solid #585858;
                                  box-sizing: content-box;
                                }
                              `}</style>
                            </div>
                          </h3>





                          <audio
                            ref={audioRef}
                            src={playlist[currentTrackIndex].src}
                            onTimeUpdate={handleTimeUpdate}
                            onLoadedMetadata={handleLoadedMetadata}
                            onEnded={() => changeTrack((currentTrackIndex + 1) % playlist.length)}
                          />





                          





                          {/* ปุ่มควบคุม */}
                          <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
                            <button onClick={() => changeTrack((currentTrackIndex - 1 + playlist.length) % playlist.length)} style={{backgroundColor: "transparent", border: "none",}}>⏮</button>
                            
                            <button onClick={() => setIsPlaying(!isPlaying)} style={{backgroundColor: "transparent", border: "none",}}>
                              {isPlaying ? "⏸" : "▶"}
                            </button>

                            <button onClick={() => changeTrack((currentTrackIndex + 1) % playlist.length)} style={{backgroundColor: "transparent", border: "none",}} >⏭</button>


                          {/* แถบเวลา */}
                            <div>

                              <input
                                type="range"
                                min="0"
                                max={duration}
                                value={currentTime}
                                
                                onChange={(e) => {
                                  if (audioRef.current) {
                                    audioRef.current.currentTime = parseFloat(e.target.value);
                                    setCurrentTime(parseFloat(e.target.value));
                                  }
                                }}
                                onMouseDown={() => setIsPlaying(false)} // หยุดเล่นเมื่อเลื่อน
                                onMouseUp={() => setIsPlaying(true)} // เล่นต่อเมื่อเลื่อนเสร็จ  
                                style={{ width: "100%", marginTop: 5, borderRadius: 10, }}
                              />
                              

                                 {/* ตกแต่งแถบเวลา */}
                                  <style jsx>{`
                                    input[type="range"] {
                                      -webkit-appearance: none;
                                      width: 100%;
                                      height: 2px;
                                      background: linear-gradient(to right, #494949ff, #727171ff);
                                      border-radius: 5px; // ปรับความโค้งมน
                                      outline: none;
                                    }

                                    input[type="range"]::-webkit-slider-thumb {
                                      -webkit-appearance: none;
                                      appearance: none;
                                      width: 4px;
                                      height: 14px;
                                      border-radius: 50%;
                                      background: #ffffffff;
                                      border: 2px solid #dacacaff;
                                      cursor: pointer;
                                    }

                                    input[type="range"]::-webkit-slider-thumb:hover {
                                      background: #ffffffff;
                                    }

                                    input[type="range"]::-moz-range-thumb {
                                      width: 14px;
                                      height: 14px;
                                      border-radius: 50%;
                                      background: #000000ff;
                                      border: 2px solid #000000ff;
                                      cursor: pointer;
                                    }
                                  `}</style>

                              {/* แสดงเวลา */}
                              <div style={{ display: "flex", justifyContent: "space-between",fontSize: "12px", color: "#555" }}>
                                <span>{formatTime(currentTime)}</span>
                                <span>{formatTime(duration)}</span>
                              </div>


                            </div>

                          </div>


                          {/* ปรับเสียง */}
                          <div style={{ marginTop: 10 }}>
                            <label>🔊</label>
                            <input
                              type="range"
                              min="0"
                              max="1"
                              step="0.01"
                              value={volume}
                              onChange={(e) => setVolume(parseFloat(e.target.value))}
                            />
                          </div>
                        </div>

        </div>

        

        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            ...fadeStyle,
          }}
        >

          <div style={{ position: "relative", width: "auto",maxHeight: "940px",height: "auto",}}>

                  <img
                    src={characters[selected].image}  // สมมติมี image1 ตัวที่ 2
                    alt={`${characters[selected].name} image overlay`}
                    style={{
                      maxHeight: "840px",
                      objectFit: "contain",
                      borderRadius: "20px",
                      position: "absolute", // ซ้อนทับด้านบน
                      top: 0,
                      left: 0,
                      zIndex: 2,
                      width: "100%",
                      pointerEvents: "none", // ให้คลิกทะลุผ่านรูปนี้ได้
                    }}
                  />

                  <img
                    src={characters[selected].image1}
                    alt={`${characters[selected].name} image`}
                    style={{
                      
                      maxHeight: "940px",
                      objectFit: "contain",
                      borderRadius: "20px",
                      position: "relative", // รูปหลักอยู่ด้านล่าง
                      zIndex: 1,
                      display: "block",
                      width: "200%",
                      opacity: 0.2,
                      marginLeft: "-5%",
                      marginTop: "-30%",
                      transform: "scale(1.1)",
                      filter: "drop-shadow(0 0 20px rgba(0, 0, 0, 0.5))",
                      maskImage: "radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0,0,0,0) 100%)",
                    }}
                  />
          </div>
        </div>
      </div>
    </div>
  );
}

