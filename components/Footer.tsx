import { CustomButton, LinkItem } from 'components'
import Image from 'next/image'
import styled from 'styled-components'
import { COLORS } from 'utils'

const CustomFooter = styled.footer`
  z-index: 20;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  width: 100%;
  height: 250px;
  background-color: ${COLORS.blackAlt};
  padding: 10px 10px 0px 10px;

  @media screen and (max-width: 768px) {
    height: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 10px 20px 10px;
  }
`

const Footer = () => {
  return (
    <CustomFooter>
      <Image
        src="/dragon.png"
        width={200}
        height={200}
        alt="dragon slydragonn"
      />
      <ul className="flex flex-col sm:flex-row justify-around items-center w-[100%] md:w-[600px] h-[250px] md:h-[80px] mb-5 md:mb-0 bg-[#181818] text-gray-300 font-thin rounded self-center">
        <li>
          <a target="_blank" href="/#">
            GITHUB
          </a>
        </li>
        <li>
          <a target="_blank" href="/#">
            LINKEDIN
          </a>
        </li>
        <li>
          <a target="_blank" href="/#">
            INSTAGRAM
          </a>
        </li>
        <li>
          <a target="_blank" href="/#">
            MEDIUM
          </a>
        </li>
      </ul>
      <CustomButton className="self-center">
        <LinkItem href="/">&#8593;</LinkItem>
      </CustomButton>
    </CustomFooter>
  )
}

export default Footer
