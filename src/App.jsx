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
          r1name="Smoother Bitter"
          r2name="Dryer Bitter"
          r1="7.3"
          r2="6.9"
        />
        <BlogPost 
          title="Olde Trip - Bitter" 
          content="Exploring various beers from around the world!" 
          photos={["https://shorturl.at/KEJQS"]}
        />
        <BlogPost 
          title="Welcome to beer battles bitches" 
          content="Exploring various beers from around the world!" 
          photos={["https://lh3.googleusercontent.com/fife/ALs6j_H2rBOBdj0U4bmsvP6ba2Ik4CdZZQzn5pETZP_QIL9VHB5rLvHelHQJmOHLP5jZXeuRXWAR90_vzYpT9U_uwOHQX-MN1QuyP2eNmZjshqNizTDj-6JVjpiGrvGzxyRAV1nM3LutYBcT9HYKHS1Mn09guv6k0MNqW4DAA5XO6L0rmQurOeASjuuoRXBI9Ux-VBaNlwhD-1bXsrKtzQz9yBrKQL8OoIESBwxUUUygVfxMDNyUGxYMkyTpRFfyfeTON8DDbYzqTpisMg5JF0RMmKAR8x1C5VEhF8NJs7PV9N4hnkr3nq3b0tfobGPf6PEzaTRlvb7fyDlAcxDRaj9-q6pDmmvyevDBb_fUhXuEKB-JavaaSoUYQJSIy5fQTJErjzHeX_OM6DhFndVPaI7aWEhGe13_ayBLqB5eh5QdhY7fHmQSGrhPFv781uDMXSVCmpFZSumvjsu8_iYFXTDuLJW5fMQ8HmIzfRU-KtCwIHVku3TGgnQZiZgVdpNEXS1iCTnj7LTe21gkmRs3QA-CpQEhtQSjHUNa5RVcSP6VZP1M6cy1iG_69G-fhDblsSWlEBX2CyeLqI5T9gk6BCQU9IflgagRoYmYgjBFE_Vg9nfyM_zGC3FRvOAevmTtbe2wLqAeyrjxttm5zgXuACniqM6XjbnE88OngMvkC6RF-3PZM_-L1jDMxyv8mWzOykqVqoNiumXxJCz1rEHk1nYo7Yi7lJwi5dqrYUW_nbYWL-u679AfmST7ojqoO0jW-UbZFHFwQA1CZsnJYr8NTtoXs4-wpEx_Os5xaN_0WWid0B0EPkcyhCjbZ7npGdAI92n2CekJ3Wr97RmDMOKYfFYRQGrJ5PtJR6gqs3vjmYeIRXJcxUatBv7ANYi-v_fcwLX69RXJF7Dg4RL4XoODknRtoDqX1AYm5fqce7JosmkSsG5J7mB6B_K15HeWaIVxHnV9aL9XbXAOD3rFv-8aN0YfDj2q_BPX4m-NfG2rB-o0A_nISKue5pUuEyWsWizCZFxPUMUxzqo2X-kXCtC1Fly7NBb95vTy6VXnxUKlOmikV3AHEVINHUjNU6OIVBWHgRnKIqmUArZn5ZSUr4l73yJnMY37TXcNND_6nyoi0-EthHhHuDT8sXTP3s4thvifDMDjHvqD26GbC5jt4RvWBfDO77cEHAyGBGMkDT58CXnlxs7FGXaUrmaJrkQLLgTUHcAxHdexda_6nPx9wjtFts6rAiex7OHIvE1OPOvaqc1yly-xoOjhhuWbBEdmPjRmZDPES6YwBRpC3vpg0L1Mwy6kkn49RK4PldRDGe4v3rtbODEL1jJLDtOraIu-WV729XkwO-SFsAu92ixJT1IuIWPFlbHhl7-AUgexkuXjodkmDejw1Scm1Z9z5QM0Jy-KKtJTWukT-4voXa0DdqqB0teQDn3yN05FGGry1GPidiFwTz2e4SGzWeR8PJlU4ZKeKQ8y5wudmXdUF8v2PaAnBEnoJy9tOxsofqHUzKruiTgpEJKC8njwTqd7pMWqB9N1EB0kCN0ZQ0GBP1TDXVhHS4STrLQ7zTRbJaSHwEdAWyBjiHSvtEO2XzoxqGFGTUqB9wEwj_0TrlsZTy7dVEh1Pt8=w1127-h892"]}
        />
        </div>
      </div>
    </>
  );
}

export default App;
