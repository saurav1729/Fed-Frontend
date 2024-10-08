/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from 'react-share';
import styles from './styles/ShareTeamData.module.scss';
import { X } from 'lucide-react';

const ShareTeamData = ({ onClose, teamData }) => {
  const { teamName, teamCode } = teamData;
  const [copyText, setCopyText] = useState('Copy');
  const message = `Congratulations! Your team "${teamName}" with code "${teamCode}" has been successfully registered!🎉🎉`;
  const websiteUrl = window.location.href;  // Replace this with your actual website URL

  const handleCopy = () => {
    const textToCopy = `Team Name: ${teamName}\nTeam Code: ${teamCode}`;
    navigator.clipboard.writeText(textToCopy);
    setCopyText('Copied');
    setTimeout(() => setCopyText('Copy'), 4000); // Reset button text after 2 seconds
  };

  return (
    <div className={styles.shareContainer}>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.maindiv}>
        <div className={styles.closebtn} onClick={onClose}>
          <X />
        </div>
        <span className={styles.shareTitle}>Share Team Info</span>
        <div className={styles.copyContainer}>
          <p style={{color:"#ffffff90" ,textWrap:"wrap"}}>
            Your Team Name: <span style={{fontWeight: "bold"}}>{teamName}</span><br />
            Your Team Code: <span style={{fontWeight: "bold"}}>{teamCode}</span>
          </p>
          <button  onClick={handleCopy} style={{marginLeft: "10px",color:"#ffffff60" ,background:"#2a2a2a" , padding:"0.3rem" , borderRadius:"10px" }}>
            {copyText}
          </button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', marginTop: '1rem' }}>
          <FacebookShareButton url={websiteUrl} quote={message} hashtag="#TeamSuccess">
            <FacebookIcon size={40} round />
          </FacebookShareButton>
          <TwitterShareButton url={websiteUrl} title={message} hashtags={['TeamSuccess']}>
            <TwitterIcon size={40} round />
          </TwitterShareButton>
          <LinkedinShareButton url={websiteUrl} title="Team Success" summary={message} source="YourApp">
            <LinkedinIcon size={40} round />
          </LinkedinShareButton>
          <WhatsappShareButton url={websiteUrl} title={message} separator=":: ">
            <WhatsappIcon size={40} round />
          </WhatsappShareButton>
        </div>
      </div>
    </div>
  );
};

export default ShareTeamData;
