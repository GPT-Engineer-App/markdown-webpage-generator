// Complete the Index page component here
// Use chakra-ui
import { useState } from "react";
import { Box, Button, Flex, Input, Textarea, useBreakpointValue, VStack } from "@chakra-ui/react";
import { FaMarkdown, FaCamera } from "react-icons/fa";

const Index = () => {
  const [url, setUrl] = useState("");
  const [markdown, setMarkdown] = useState("");
  const [screenshot, setScreenshot] = useState("");

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleGenerateMarkdown = async () => {
    // Simulated markdown generation (replace with actual API call or logic)
    const generatedMarkdown = `# Page Title\n\nThis is a simulated markdown of the page at ${url}.`;
    setMarkdown(generatedMarkdown);
    setScreenshot("https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwc2NyZWVuc2hvdHxlbnwwfHx8fDE3MTMzNTExNzF8MA&ixlib=rb-4.0.3&q=80&w=1080");
  };

  const flexDirection = useBreakpointValue({ base: "column", md: "row" });

  return (
    <VStack spacing={4} p={5}>
      <Flex width="full" justifyContent="center">
        <Input placeholder="Enter URL here" value={url} onChange={handleUrlChange} size="lg" width="auto" flexGrow={1} mr={2} />
        <Button leftIcon={<FaMarkdown />} colorScheme="blue" onClick={handleGenerateMarkdown}>
          Generate Markdown
        </Button>
      </Flex>
      <Flex direction={flexDirection} width="full" mt={4}>
        <Box flex={1} p={2}>
          <Text as="h2" fontSize="xl" mb={2}>
            Screenshot:
          </Text>
          <Box as="img" src={screenshot} alt="Website Screenshot" borderRadius="md" boxShadow="md" maxH="400px" objectFit="cover" width="full" />
        </Box>
        <Box flex={1} p={2}>
          <Text as="h2" fontSize="xl" mb={2}>
            Markdown:
          </Text>
          <Textarea value={markdown} readOnly height="400px" />
        </Box>
      </Flex>
    </VStack>
  );
};

export default Index;
