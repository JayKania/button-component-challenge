import styled from "styled-components";
import "./App.css";
import Button from "./Button";

const App = () => {
  return (
    <StyledApp className="App">
      <StyledHeading>Buttons</StyledHeading>
      {/* variant wrapper */}
      <StyledVariantWrapper className="variant-wrapper">
        <StyledBtnLabelWrapper className="btn-wrapper">
          <span className="btn-label">{`<Button />`}</span>
          <Button />
        </StyledBtnLabelWrapper>
        <StyledBtnLabelWrapper className="btn-wrapper">
          <span className="btn-label">{`<Button variant="outline" />`}</span>
          <Button variant="outline" />
        </StyledBtnLabelWrapper>
        <StyledBtnLabelWrapper className="btn-wrapper">
          <span className="btn-label">{`<Button variant="text" />`}</span>
          <Button variant="text" />
        </StyledBtnLabelWrapper>
      </StyledVariantWrapper>

      {/* disabled shadow */}
      <StyledBtnLabelWrapper>
        <span className="btn-label">{`<Button disableShadow />`}</span>
        <Button disableShadow />
      </StyledBtnLabelWrapper>

      {/* disabled wrapper */}
      <StyledDisabledWrapper>
        <StyledBtnLabelWrapper>
          <span className="btn-label">{`<Button disabled />`}</span>
          <Button text="disabled" disabled />
        </StyledBtnLabelWrapper>
        <StyledBtnLabelWrapper>
          <span className="btn-label">{`<Button variant="text" disabled />`}</span>
          <Button text="disabled" variant="text" disabled />
        </StyledBtnLabelWrapper>
      </StyledDisabledWrapper>

      {/* Icon wrapper */}
      <StyledIconWrapper>
        <StyledBtnLabelWrapper>
          <span className="btn-label">{`<Button startIcon="local_grocery_store" />`}</span>
          <Button size="sm" color="primary" startIcon />
        </StyledBtnLabelWrapper>
        <StyledBtnLabelWrapper>
          <span className="btn-label">{`<Button endIcon="local_grocery_store" />`}</span>
          <Button size="md" color="primary" endIcon />
        </StyledBtnLabelWrapper>
      </StyledIconWrapper>

      {/* Size Wrapper */}
      <StyledSizeWrapper>
        <StyledBtnLabelWrapper>
          <span className="btn-label">{`<Button size="sm" />`}</span>
          <Button size="sm" color="primary" />
        </StyledBtnLabelWrapper>
        <StyledBtnLabelWrapper>
          <span className="btn-label">{`<Button size="md" />`}</span>
          <Button size="md" color="primary" />
        </StyledBtnLabelWrapper>
        <StyledBtnLabelWrapper>
          <span className="btn-label">{`<Button size="lg" />`}</span>
          <Button size="lg" color="primary" />
        </StyledBtnLabelWrapper>
      </StyledSizeWrapper>

      {/* Color Wrapper */}
      <StyledColorWrapper>
        <StyledBtnLabelWrapper>
          <span className="btn-label">{`<Button color="default" />`}</span>
          <Button color="default" />
        </StyledBtnLabelWrapper>
        <StyledBtnLabelWrapper>
          <span className="btn-label">{`<Button color="primary" />`}</span>
          <Button color="primary" text="primary" />
        </StyledBtnLabelWrapper>
        <StyledBtnLabelWrapper>
          <span className="btn-label">{`<Button color="secondary" />`}</span>
          <Button color="secondary" text="secondary" />
        </StyledBtnLabelWrapper>
        <StyledBtnLabelWrapper>
          <span className="btn-label">{`<Button color="danger" />`}</span>
          <Button color="danger" text="danger" />
        </StyledBtnLabelWrapper>
      </StyledColorWrapper>
    </StyledApp>
  );
};

const StyledApp = styled.div`
  text-align: center;
  max-width: 70%;
  margin: 0 auto;
`;

const StyledHeading = styled.h2`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
`;

const StyledBtnLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: fit-content;
  padding: 1rem;
  span {
    font-size: 12px;
    font-family: Ubuntu Mono, sans-serif;
    text-align: left;
    margin-bottom: 5px;
  }
`;

const StyledVariantWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const StyledDisabledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const StyledSizeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const StyledColorWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledIconWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default App;
