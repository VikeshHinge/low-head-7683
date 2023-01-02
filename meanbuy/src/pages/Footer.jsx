
import {VStack,Box,Text,Image,Heading,Link,Flex,Grid,Button,InputGroup,Input,InputRightElement,
  Divider,Spacer,HStack,SimpleGrid
} from "@chakra-ui/react"
import { FaYoutube,FaInstagramSquare,FaLinkedin,FaCcVisa,FaAmazonPay,FaCcMastercard,FaTwitter } from "react-icons/fa";
const Footer = () => {

    return(
        <Box pt='15px' bg='#e9e9e9' zIndex='999'>
          <SimpleGrid columns={{base:"2",md:"5"}} spacing={0}>
              <Flex flexDirection='column' textAlign='left' g='10px' ml='10px'  >
               <Link fontSize='sm'   mt='20px' color='orange.500' fontWeight='bold' >OUR POLICIES</Link>
               <Link  fontSize='xs' >Covid-19 Precautions</Link>
               <Link  fontSize='xs' >Our Promise</Link>
               <Link  fontSize='xs' >Terms & Conditions</Link>
               <Link  fontSize='xs' >Privacy Policy</Link>
               <Link  fontSize='xs' >Customs tariffs and fees</Link>
              </Flex>
              <Flex flexDirection='column' textAlign='left' g='10px' ml='10px'  >
               <Link fontSize='sm'   mt='20px' color='orange.500' fontWeight='bold'>CORPORATE</Link>
               <Link  fontSize='xs' >Sell With Us</Link>
               <Link  fontSize='xs' >Career Opportunities</Link>
               <Link  fontSize='xs' >Our Blog</Link>
               <Link  fontSize='xs' >Sitemap</Link>
              </Flex>
              <Flex flexDirection='column' textAlign='left' g='10px' ml='10px'  >
               <Link fontSize='sm'  mt='20px' color='orange.500' fontWeight='bold'>HELP</Link>
               <Link  fontSize='xs' >How MeanBuy Works</Link>
               <Link  fontSize='xs' >My Orders</Link>
               <Link  fontSize='xs' >Exchanges, Returns and Refunds</Link>
               <Link  fontSize='xs' >Contact Us</Link>
               <Link  fontSize='xs' >FAQ</Link>
              </Flex>
              <Flex flexDirection='column' textAlign='left' g='10px' ml='10px'  >
               <Link fontSize='sm'  mt='20px' color='orange.500' fontWeight='bold'>SELL WITH US</Link>
               <Link  fontSize='xs' >General Information</Link>
               <Link  fontSize='xs' >Signup</Link>
              </Flex>

              <VStack >
              <InputGroup  >
              <Input placeholder='Enter Email' size='xs' w='80%' />
              <Button colorScheme='orange' size='xs' borderRadius='0px'>Subscribe</Button>
              </InputGroup>
              <HStack spacing='24px' pl={{base:"80px",md:"0px"}}><FaYoutube color="red" size='30px' /><FaInstagramSquare color="#8a3ab9" size='30px' />
              <FaLinkedin color="#0A66C2" size='30px' /><FaTwitter color='#1c9cea' size='30px'/></HStack>
              <HStack spacing='24px' pl={{base:"80px",md:"0px"}}><FaCcVisa color="	#1A1F71" size='30px'/> <FaAmazonPay color="#f79c34" size='30px'/> <FaCcMastercard size='30px' color="#EB001B"/></HStack>
              </VStack>
                
            </SimpleGrid>
            <Divider/>
           <VStack>
           <Box textAlign='left' p='20px'>
           <Text fontSize={{base:"xs",md:"sm"}} mt='10px' color='orange.500' fw='bold' fontWeight='bold'> In love with React & Next</Text>
            <Text fontSize={{base:"8px",md:"sm"}}>Meanbuy is a comprehensive platform for you to choose how you shop, whether it is buying 
            instantly,
             waiting to save or to pick up your order from the store after freezing it.</Text>
             <Spacer />
            <Text fontSize={{base:"8px",md:"sm"}}>Everyone will agree that it is not easy to go down to the market in massive traffic, driving
             through crowds, all striving for the same trendy clothing, expecting in line to try on the picked up items in 
             the trial rooms, and finally deciding on the product you buy. Some people like to personally analyze the product
              before purchasing it in the store. Although some people do not like to shop online, others beg to differ by
               using the internet to do things.
             For all you internet enthusiasts who like online shopping,</Text>
             <Text fontSize={{base:"xs",md:"sm"}}  mt='10px' color='orange.500' fontWeight='bold'> Get The Best Of Your Online Shopping Experience</Text>
             <Text fontSize={{base:"8px",md:"sm"}}>Keeping mind the fact that everything is just a tap away in today's world, fashion and clothing have no 
                escape from the cyberspace. Online shopping is made easier with various categories and filters that let you get
                 the best result of what you're looking for. At Meanbuy.com we specialize in categorizing the required fields as
                  per your convenience to provide you the best online shopping experience. Categories like Online shopping for 
                  kids, online shopping for men, online shopping for women, online shopping for accessories, etc. is curated to
                   make this experience 
                even more convenient. Find the Best Online Shopping in Hyderabad only at Meanbuy.</Text>
                <Spacer/>
                <Text fontSize={{base:"xs",md:"sm"}}  mt='10px' color='orange.500' fontWeight='bold'> Meanbuy Let You choose At Your Convenience</Text>
                <Text fontSize={{base:"8px",md:"sm"}}>What if you belong to the former kind, where you like to buy the product from the shop after analyzing it 
                personally? But don't want to miss out on a fantastic product in the process? We got your back! At Meanbuy.com, 
                you can freeze the product and pick up from your neighboring store without the worry of missing the product.
                 Another additional 
                feature of this website is, you can wait and save on the products you like.</Text>
           </Box>
           </VStack>
           
        </Box>
    )
}

export default Footer;