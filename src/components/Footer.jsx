import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import githubLogo from '../assets/github-logo.png';

const StyledFooter = styled.footer`
  margin-top: auto;
  height: 50px;
  width: 100%;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 1.5rem;
  background-color: var(--prussian-blue);
  position: relative;

  & > div{
    position: sticky;
    left:0%;
    display: grid;
    grid-template-columns: 2.3fr 1fr 2fr 0.1fr;
    align-items: center;
    justify-items: center;
    width: 100vw;
    height: 100%;
  }

  & a{
    color: white;
    justify-self: start;
  }

  & h2{
    font-size: clamp(1rem, 3vw, 2rem);
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
        <h2>
          Image by{" "}
          <a href="https://classicexhibits.com/tradeshow-blog/author/mel/">
            Mel White
          </a>
        </h2>
      </div>
    </StyledFooter>
  );
}

Footer.propTypes = {
  projectName: string.isRequired,
};

export default Footer;
