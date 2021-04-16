import React, { useState, useRef, useCallback, useEffect } from "react";
import Header from "../../components/Header";

const Page: React.FC = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Header />
    </>
  );
};

export default Page;
