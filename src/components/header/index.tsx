import CompanyLogo from "../../assets/company-logo.jpeg";
import { Button, Container, Icon, Logo } from "./styles";

type Props = {
  onClick: () => any;
}

const Header = ({ onClick }: Props) => {
  return (
    <Container>
      <Logo src={CompanyLogo} />
      <Button onClick={onClick}>
        Incluir <Icon />
      </Button>
    </Container>
  );
};

export default Header;
