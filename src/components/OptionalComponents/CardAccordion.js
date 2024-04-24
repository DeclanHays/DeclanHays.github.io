import {
  Box,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Text,
  UnorderedList,
  ListItem
} from "@chakra-ui/react";
import React from "react";

function CardAccordion({ hasAccordion = false, items=[] }) {
  if (hasAccordion) {
    return (
      <Accordion allowMultiple allowToggle defaultIndex={[0]} marginTop="8">
        {items.map((item, index) => (
          <AccordionItem key={index}>
            <AccordionButton>
              <Box as="span" textAlign="left">
                <Text fontWeight={"bold"}>{item.title}</Text>
                <Text>{item.subTitle}</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <Text>{item.content}</Text>
              <UnorderedList ml="6">
                {item.listItems.map((bullet) => (
                  <ListItem>{bullet}</ListItem>
                ))}
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    );
  }
  return null;
}

export default CardAccordion;
