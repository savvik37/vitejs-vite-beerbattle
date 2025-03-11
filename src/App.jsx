import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import beerone from '/beerone.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import BlogPost from './components/BlogPost'
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const img =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Budweiser_beer.jpg/640px-Budweiser_beer.jpg';

  const settings = {
    arrows: true,
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="maincon">
        <div className="navibar">
          <h1>beer battle</h1>
          <div className="navibaroptions">
            <p>2025</p>
          </div>
        </div>
        <div className="content">
        <BlogPost
          title="My Beer Adventure 2" 
          content="Exploring various beers from around the world!" 
          photos={[
          "https://lh3.googleusercontent.com/fife/ALs6j_EGPDxkPZj98vh07z_C8aHeISQ__q0eO2ZDoGLrN48fC4oB0-1Z1VxkWkCIH7X7HHS6qyNr1PmY8EmNstHIxyVaD5hnKorhHf9_8jk_prAYxDYi4Z2B6kVQhBYrQHwUkcuXEBMt77Ezb5QK-fnUFaLP4AohM_8AahXdynfuc7MYhjeVctn7wequtshAkB5MiJYiAB6vgWrqUiMGTSA5iFxdUrjVMVh7KFEY2qhoAjEhJXsP5SlZ4DKuRNktekDRbxG7hpO4nLr9x7kseGGZPf-cTcimtyPg_Vi8mHyzZFgu5AmVgEtvk2x_B2Fk9-1ee61-JqiMbWlVTE_MOUGwkMzADXOrFONSnv-_IBLTr5o_4SLHDCsgOkwa4g0imFDnKzcSVwIs_9WTO5-p5FFMChc-Vp4cmjAM1H-YCrK8v9FUEEHXOzmvr_8wfPYByXGSmIivTGWgMw2kc4s-1zl4MarCGfYb3m9Wp3cgX3-MhVguJ6NjfgN8ALVAlKg5TdjHwHske8Rkc5nD4i-kEJCXC2dTXCDzect1E1Xt7PiIr3KDxrMuDwHRUdFiJaIqzdn7eNp5IDBI-kX-n0dnADUHUOCKWvUvj5wDRcG_yE2aBXmhOfyv3tBbG6HtiMiMMg2u3mlq7GZpybgKFOhe5R3bFrUoqLe6_O9iAkANeRttdM5snQ7mwDMrs5BOS0UsSo5P5tdweXAb918IFkDYXYtMSHzDAULrA21V9SfiPeZdv_uXgbR4bPMG2XtcyZGIPs8cCaMXOcbRPFKelna7fPDsAqAmZ1xtMMkcDi5UTH2BUKBf2RREgYq3-RuTFUZ6SsYsgxEC2GRhKfuzlvAE3EN2v7q4jw5QviUs6ugKx1USlCHaryWi-XNQnlYBuh-B2Toz2CRnnmQeeEhqOVzXX_sNUpCkcYjU2w0Pn5bY7aaOg4QAajo8ABRwQFuhDCJZ7l2rRonMpjvAMw_0y0zhMRb7b2Emx72ngm_p-87ddEQcF0qJO3rVhb0TirfmZLAVSzz9AGB-I95MqfEuE0CwBRjv8MHSlOD-YggucLMpyYhyisyH4nOVUk51URfH28i_Jg-PZ8BIx_kFgizKCoKrrviomLuMZz2gb-plCxfyqMAeiJR4PJRkxhFid5t6FJ22S8phdaQ5mhjtt2YF3cS5XN_jjy91XISkT5YUVRdssRtvvWbCeSfdag4md5zROq5WSVPmcyxn0F_PzwFQWiB4mxnouuHEXofdIXVYDb7YhIr5b5vstAqFUnXXXGncYZKutz-OWD69BoJYYpmd5CH1EWyPxhfI4mCyXxoGlKYic4YG27B1nhaw_3N8sOXwr12b3w_zmGdq87g6G5NEucSeJqXhMCbKNzWv5yRZ8vxOetbeHLXmdrsV11gRVmMVL-Et4JvaspJVLKMLyxBCcOPn2-JSxhEuHkbYomtz5LBdq0148dIxzKlGOZ1nTaDEtVLEGgrUjoUcdGRWMMz1yc22kPYFxQdhFn1h2DWQuvF9VPWg_PNKUcZHTftyoI9N8xwVlNDeQbffUTCz3FzB4K5VvRdeSQH3ArcX6eGp4z8M7aN7gLCgMNOm-ltzkb_unfHbUzKZeLlh4ruVoZgwS-SoQYk=w1920-h892", 
          "https://shorturl.at/hi5gW"
          ]}
        />
          <BlogPost 
          title="Olde Trip - Bitter" 
          content="Exploring various beers from around the world!" 
          photos={["https://shorturl.at/KEJQS", "https://shorturl.at/OxPBx"]}
        />
        <BlogPost 
          title="Welcome to beer battles bitches" 
          content="Exploring various beers from around the world!" 
          photos={[""]}
        />
        </div>
      </div>
    </>
  );
}

export default App;
