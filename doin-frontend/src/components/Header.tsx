import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useEthers, useTokenBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import { toast } from "react-toastify";

const Header: React.FC = () => {
  const [accountData, setAccountData] = React.useState<any>(null); // storing account data

  const { account, activateBrowserWallet, chainId } = useEthers();

  // storing the balance shown in the header

  React.useEffect(() => {
    if (chainId === 4 || chainId === 97) {
      setAccountData(account);
    }
  }, [account, chainId]);

  console.log(accountData);

  return (
    <Navbar bg="dark" expand="xxl">
      <Container>
        <Navbar.Brand
          href="#home"
          style={{
            color: "#fff",
          }}
        >
          Doin NFT
        </Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link
            href="#home"
            style={{
              color: "white",
            }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="#link"
            style={{
              color: "white",
            }}
          >
            Link
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
