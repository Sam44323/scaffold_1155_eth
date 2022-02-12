import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEthers } from "@usedapp/core";
import { toast } from "react-toastify";

const Header: React.FC = () => {
  const [accountData, setAccountData] = React.useState<any>(null);
  const navigate = useNavigate();

  const { account, activateBrowserWallet, chainId } = useEthers();

  React.useEffect(() => {
    setAccountData(account);
  }, [account, chainId]);

  React.useEffect(() => activateBrowserWallet(), [activateBrowserWallet]);

  console.log(accountData);

  return (
    <Navbar bg="dark" expand="xxl">
      <Container>
        <Navbar.Brand
          onClick={() => navigate("/")}
          style={{
            color: "#fff",
          }}
        >
          Doin NFT
        </Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link
            onClick={() => navigate("/")}
            style={{
              color: "white",
            }}
          >
            Explore
          </Nav.Link>
          <Nav.Link
            onClick={() => navigate("/user")}
            style={{
              color: "white",
            }}
          >
            User
          </Nav.Link>
        </Nav>
      </Container>
      <Container className="justify-content-end flex-grow-1 pe-3">
        <Button
          variant="primary"
          onClick={
            !account
              ? () => activateBrowserWallet()
              : () => toast.info("You are already logged in")
          }
        >
          {accountData
            ? `${accountData?.substring(0, 4)}...${accountData?.substring(
                accountData.length - 4
              )}`
            : "Connect"}
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;
