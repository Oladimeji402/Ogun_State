<template>
  <div class="container-fluid">
    <div class="news-card-layout">
      <div class="news-card" v-for="(news, index) in newsList" :key="index">
        <div class="news-image">
          <img :src="news.image" :alt="news.title" />
          <div class="tag rounded-pill">Latest News</div>
        </div>
        <div class="news-content">
            <p>{{ news.date }}</p>
          <h4>{{ news.title }}</h4>
          <p>{{ news.description }}</p>
          <a href="#" class="text-success links">Read More</a>
        </div>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "NewsCardLayout",
    data() {
      return {
        newsList: [
          {
            title: "Ogun LG Poll: APC wins all 20 LGAs, 236 councillorship seats",
            date: "November 17, 2024",
            description: "The Ogun State Independent Electoral Commission (OGSIEC) has declared the All Progressives Congress (APC) as the winner......",
            image: "/src/assets/images/01.png"
        },
          {
            title: "Actress Dayo Amusa debunks viral baby photo",
            date: "November 18, 2024",
            description: "Nollywood actress Dayo Amusa has debunked rumours surrounding a trending picture purported to be her newborn baby.....",
           image: "/src/assets/images/03.png"
          },
          {
            title: "Suspected cultists kill former LG councillor in Ogun",
            date: "November 16, 2024",
            description: "Gunmen suspected to be cultists on Friday killed  Omolola Odutola, a former Councillor in Abeokuta North Local Government of Ogun.",
            image: "/src/assets/images/02.png"
        },
        {
            title: "Abiodun, Adebutu clash as APC clears Ogun LG seat",
            date: "November 17, 2024",
            description: "Governor Dapo Abiodun’s Chief Press Secretary, Lekan Adeniran, made the allegation in a statement on Sunday.",
            image: "/src/assets/images/04.png"
        },
        {
            title: "Abiodun swears in LG chairmen, vows to end tyranny, hooliganism in Ogun state",
            date: "November 18, 2024",
            description: "The Ogun State Governor, Prince Dapo Abiodun, has pledged to end all forms of tyranny and hooliganism in the state...  ",
            image: "/src/assets/images/05.png"
        },
        {
            title: "Suspected cultists kill former LG councillor in Ogun",
            date: "November 17, 2024",
            description: "The ruling All Progressives Congress (APC) has been declared winner of all the local councils’ chairmanship and councillorship....",
            image: "/src/assets/images/06.png"
        },
        {
            title: "OOU VC Tasks Academics On Reversal Of ‘Japa’ Syndrome In Nigeria",
            date: "November 18, 2024",
            description: "The Vice-Chancellor of Olabisi Onabanjo University (OOU), Ago-Iwoye, Prof Ayodeji Agboola, has appealed to Nigerian sociologists and.",
            image: "/src/assets/images/07.png"
        },
        {
            title: "Governor Abiodun Reaffirms Commitment To Supporting Manufacturers In Ogun State",
            date: "November 17, 2024",
            description: "The Ogun State Governor, Mr.  Dapo Abiodun, has expressed the state government’s dedication to creating an enabling environment",
            image: "/src/assets/images/08.png"
        },
        {
            title: "CSR: Dangote Cement Ibese Plant fetes senior citizens in host communities in Ogun",
            date: "Novmber 17, 2024",
            description: "Dangote Cement Plc, Ibese Plant, in Ogun State, has extended the frontier of its social investments in the wellbeing of its 17 host communities.",
            image: "/src/assets/images/09.png"
        }
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .news-card-layout {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    padding: 20px;
  }
  
  .news-card {
    flex: 1 1 calc(33.33% - 20px); 
    width: 100%;
    border-radius: 5px;
    max-width: 100%;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background: #fff;
    transition: transform 0.3s;
  }
  
  .news-card:hover {
    transform: translateY(-5px);
  }
  
  .news-image {
  position: relative;
  width: 100%;
  height: 200px; 
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
  .news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
  
  .tag {
    position: absolute;
    top: 10px;
    left: 10px;
    background: red;
    color: white;
    padding: 5px 10px;
    font-size: 12px;
    border-radius: 3px;
  }
  
  .news-content {
    transition:  all 500ms ease-in-out;
    padding: 15px;
  }
  
  .news-content h4 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .news-content p {
    font-size: 14px;
    color: #555;
  }
  
  .news-content .read-more {
    display: inline-block;
    margin-top: 10px;
    color: #8e2157;
    font-weight: bold;
    text-decoration: none;
  }
  .news-content:hover{
    background-color: #56d585;
    color: white;
  }
  .news-content .read-more:hover {
    text-decoration: underline;
  }
  
  @media (max-width: 768px) {
    .news-card-layout {
      flex-direction: column;
      align-items: center;
    }
  
    .news-card {
      max-width: 100%;
    }
  }
  </style>
  