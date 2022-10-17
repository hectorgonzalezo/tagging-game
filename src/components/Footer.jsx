import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import githubLogo from '../assets/github-logo.png';

const StyledFooter = styled.footer`
  margin-top: auto;
  display: flex;
  align-items: center;
  ${'' /* justify-content: center; */}
  height: 50px;
  width: 100%;
  gap: 2vw;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 1.5rem;
  background-color: var(--prussian-blue);
  position: relative;

  & h2,
  & a {
    position: sticky;
  }

  & > h2{
    left: 10px;
    transform: translate(50%, 0);
  }

  a {
    left: 60%;
    transform: translate(50%, 0);
  }
`;

const GitHubLogo = styled.img`
  height: 30px;
`;

function Footer({ projectName }) {
  return (
    <StyledFooter>
      <h2>Héctor González Orozco</h2>
      <a href={`https://github.com/hectorgonzalezo/${projectName}`}>
        <GitHubLogo alt="github logo" id="github-logo" src={githubLogo} />
      </a>
    </StyledFooter>
  );
}

Footer.propTypes = {
  projectName: string.isRequired,
};

export default Footer;
