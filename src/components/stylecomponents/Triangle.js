import tw from "tailwind-styled-components/dist/tailwind";
import styled from "styled-components";

const triangletopleft = styled.div`
  border-top: 16em solid white;
  border-right: 16em solid transparent;
`;

const TriangleTopLeft = tw(triangletopleft)`
  w-0
  h-0
  absolute
  top-0
  left-0
`;

const trianglebottomright = styled.div`
  border-bottom: 16em solid white;
  border-left: 16em solid transparent;
`;

const TriangleBottomRight = tw(trianglebottomright)`
w-0
h-0
absolute
bottom-0
right-0
`;

const Triangles = () => {
  return (
    <>
      <TriangleTopLeft />
      <TriangleBottomRight />
    </>
  );
};

export default Triangles;
