import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import githubLogo from '../assets/github-logo.png';

const StyledFooter = styled.footer`
  margin-top: auto;
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  gap: 2vw;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 1.5rem;
  background-color: var(--prussian-blue);
  position: relative;

  & > div{
    position: sticky;
    left:50%;
    transform: translate(-50%, 0);
    display: flex;
    gap: 15px;
  }

`;

const GitHubLogo = styled.img`
  height: 30px;
`;

function Footer({ projectName }) {
  return (
    <StyledFooter>
      <div>
        <h2>Héctor González Orozco</h2>
        <a href={`https://github.com/hectorgonzalezo/${projectName}`}>
          <GitHubLogo alt="github logo" id="github-logo" src={githubLogo} />
        </a>
      </div>
    </StyledFooter>
  );
}

Footer.propTypes = {
  projectName: string.isRequired,
};

export default Footer;
