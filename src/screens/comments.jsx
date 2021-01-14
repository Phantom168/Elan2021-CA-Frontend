/* eslint-disable no-unused-vars */
import React, { Component} from 'react'
import {Box,Button,Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Center,
    TextArea,
    InputGroup,
    Text,
    InputLeftAddon,
    Spinner,
    Divider,
    Heading,} from '@chakra-ui/react';
import axios from 'axios';
import {caportal} from '../constants';
import {FaPlusCircle} from 'react-icons/fa';
import {withAuth0} from'@auth0/auth0-react';
import Comment from '../components/comment';

export class Comments extends Component {

    

    constructor(props) {
        super(props);
        this.statusRef = React.createRef();
    
        this.state = {
             loading:false,
             data:[],
             error:'',
             comment_body:'',
             replied_to:'',
             modalOpen:false,
             btnDisable:false
        }


        const {
            getAccessTokenSilently,
          } = this.props.auth0;
        
        
            (async () => {
              try {
                 await getAccessTokenSilently().then((token) => {
                  axios
                    .post(`${caportal}/addNewAmbassador/`, {
                      access_token: token,
                    })
                    .then((res) => {
                      if (res.status == 200) {
                        var currToken = res.data.token
                          console.log(currToken)
        
                          
                          this.setState({loading:true})
                          axios.get(`${caportal}/getAllComments/`,{
                              headers:{
                                  Authorization:`Token ${currToken}`
                              }
                          }).then(res=>{
                              this.setState({loading:false,
                              data:res.data});
                              console.log(res.data)
                          }).catch(err=>{
                              this.setState({loading:false,error:err})
                          })
                      }
                    })
                    .catch((e) => {
                      console.error(e);
                    });
                });
              } catch (e) {
                console.error(e);
              }
            })();



       

    }


    postComment(e){
        
       
        var statusTextEl = document.getElementById('statusText');
        statusTextEl.innerText = "Your Comment was Submitted Successfully"
        const token = localStorage.getItem('ca_token')
        this.setState({loading:true})
        axios.post(`${caportal}/addComment/`,
        {
            body:this.state.comment_body,
            replied_to:this.state.replied_to
        }
        ,{
            headers:{
                Authorization:`Token ${token}`
            }
        }).then(res=>{
            if(statusTextEl)
                statusTextEl.innerText = "Your Comment was Submitted Successfully"
            this.setState({loading:false});
            setTimeout(()=>{
                this.closeModal()
            },2000);
            
        }).catch(err=>{
            if(statusTextEl)
                statusTextEl.innerText = "There was an error submitting your comment"
            this.setState({loading:false,error:err})
            setTimeout(()=>{
                this.closeModal()
            },2000);
            
        })
    }

    openModal(){
        this.setState({modalOpen:true})
    }

    closeModal(){
        this.setState({modalOpen:false})
    }
    

    render() {
        return (<>
            <Box minH='70vh' mb='50px'>
                <Button leftIcon={<FaPlusCircle />} colorScheme='green' variant='outline' m='5' onClick={this.openModal.bind(this)}>Add Comment</Button>
                <Divider/>
                {this.state.loading && <Center><Spinner/></Center>}
                {this.state.data && 
                    this.state.data.map((item,index)=>{
                         return (<Comment key={index} isMine={item.email==localStorage.getItem('ca_email')} item={item} ></Comment>)
                    })
                }
            </Box>
            <Modal isOpen={this.state.modalOpen} onClose={this.closeModal.bind(this)}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader><Center>Add A Comment</Center></ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Box
                    rounded={"lg"}
                    bg={"white"}
                    //boxShadow={"lg"}
                    p={{ base: 4, md: 8 }}
                    >
                    <Stack spacing={4}>
                        <FormControl id="comment_body">
                        <FormLabel>Comment*</FormLabel>
                        <Input type='text' value={this.state.comment_body} onChange={(e)=>{this.setState({comment_body:e.target.value})}} placeholder='Sample Comment'/>
                        </FormControl>
                        {/* <TextArea placeholder="Eg. Sample Comment" size='sm' value={this.state.comment_body} onChange={(e)=>{this.setState({comment_body:e.target.value})}} /> */}
                        <FormControl id="replied_to">
                        <FormLabel>Reply To (keep blank if not a reply)</FormLabel>
                        <InputGroup>
                            <InputLeftAddon  >@</InputLeftAddon>
                            <Input type="text" borderLeftRadius="0" value={this.state.replied_to} onChange={(e)=>{this.setState({replied_to:e.target.value})}} placeholder="John Doe" />
                        </InputGroup>
                        </FormControl>
                        <Stack spacing={6}>
                        <Button disabled={this.state.btnDisable} colorScheme={"blue"} variant={"solid"} onClick={this.postComment.bind(this)}>
                           Submit
                        </Button>
                        </Stack>
                    </Stack>
                    </Box>
                </ModalBody>
                <ModalFooter textAlign='left'>
                    <Text ml='0' fontWeight='700' mr='auto' id='statusText'></Text>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </>)
    }
}

export default withAuth0(Comments);
