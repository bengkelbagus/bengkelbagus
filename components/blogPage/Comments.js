import { BACKEND_URL } from "@/Utils/Constants";
import { dateFormat, fetchData } from "@/Utils/Helper";
import { Button } from "@chakra-ui/button";
import { Checkbox } from "@chakra-ui/checkbox";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
} from "@chakra-ui/input";
import {
  Box,
  Divider,
  Heading,
  List,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import axios from "axios";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

TimeAgo.addDefaultLocale(en);

const timeAgo = new TimeAgo("en-US");

const PostComment = ({ blogId, threadOf }) => {
  const [isAnonim, setIsAnonim] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const sendComment = () => {
    if (!isAnonim && name === "") {
      alert("Isi nama kamu jika ingin tidak ingin ditampilkan sebagai anonim!");
      return;
    } else if (comment === "") {
      alert("Pastikan komentar tidak kosong!");
      return;
    }
    const form = {
      authorId: uuidv4,
      authorName: name === "" ? "Anonim" : name,
      authorEmail: email,
      content: comment,
      threadOf,
      related: [
        {
          refId: String(blogId),
          ref: "blog",
          field: "comments",
        },
      ],
    };
    axios
      .post(BACKEND_URL + `/comments/blog:${blogId}`, form)
      .then(() => {
        window.location.reload();
      })
      .catch((e) => {
        alert(JSON.stringify(e));
      })
      .finally(async () => {
        setName("");
        setEmail("");
        setComment("");
      });
  };

  return (
    <Box display="flex" flexDir="column" width="100%" gridGap="1rem">
      {!isAnonim && (
        <>
          <InputGroup size="sm">
            <InputLeftAddon>Nama</InputLeftAddon>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama anda"
            />
          </InputGroup>
          <InputGroup size="sm">
            <InputLeftAddon>Email</InputLeftAddon>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan email anda"
            />
          </InputGroup>
        </>
      )}
      <Textarea
        onChange={(e) => setComment(e.target.value)}
        size="sm"
        placeholder="Bagaimana tanggapanmu?"
      />
      <Checkbox onChange={(e) => setIsAnonim(e.target.checked)} size="sm">
        Tampilkan sebagai anonim?
      </Checkbox>
      <Button
        mt="2"
        size="sm"
        alignSelf="flex-end"
        colorScheme="yellow"
        onClick={sendComment}
      >
        Kirim
      </Button>
    </Box>
  );
};

function CommentsItem({ item, blogId, replyComment, setReplyComment }) {
  let children = null;
  if (item.child) {
    children = (
      <List pl="1rem" width="100%">
        {item.child.map((i) => (
          <CommentsItem
            item={i}
            key={i.id}
            blogId={blogId}
            replyComment={replyComment}
            setReplyComment={setReplyComment}
          />
        ))}
      </List>
    );
  }

  return (
    <ListItem>
      <Box width="100%" pl={item.threadOf ? `${item.threadOf * 1}rem` : 0}>
        <VStack
          width="100%"
          alignItems="flex-start"
          gridGap="5px"
          borderLeftWidth={item.threadOf ? "medium" : ""}
          pt="1rem"
          pl={item.threadOf ? "1rem" : "0"}
        >
          <Box display="flex" flexDir="column" gridGap="2px">
            <Text fontSize="14px">{item.authorName}</Text>
            <Text fontSize="13px" color="gray">
              {timeAgo.format(new Date(item.created_at), "twitter-now")}
            </Text>
          </Box>
          <Text fontSize="14px" whiteSpace="pre-wrap">
            {item.content}
          </Text>
          <Button
            alignSelf="flex-end"
            size="xs"
            variant="ghost"
            onClick={() =>
              setReplyComment((prev) => (prev === item.id ? null : item.id))
            }
          >
            Balas
          </Button>
          {item.id === replyComment && (
            <PostComment blogId={blogId} threadOf={item.id} />
          )}
          <Divider />
        </VStack>
      </Box>
      {children}
    </ListItem>
  );
}

const Comments = ({ blogId, comments }) => {
  const [replyComment, setReplyComment] = useState(null);
  const [commentsSorted, setCommentsSorted] = useState(null);

  useEffect(() => {
    const tempComments = [...comments];
    const childComments = comments.filter(({ threadOf }) => threadOf);
    childComments.forEach((data) => {
      const tempBase = tempComments.find(({ id }) => data.threadOf === id);
      const idx = tempComments.indexOf(tempBase);
      if (tempComments[idx]["child"]) {
        tempComments[idx]["child"].push(data);
      } else {
        tempComments[idx]["child"] = [data];
      }
    });
    const baseComments = tempComments.filter(({ threadOf }) => !threadOf);
    setCommentsSorted(baseComments);
  }, []);

  if (!commentsSorted) return null;

  return (
    <Box id="comments" display="flex" flexDir="column" alignItems="flex-start">
      <Heading as="h4" size="md" mb="1rem">
        Komentar <Text as="span">({comments.length})</Text>
      </Heading>
      <PostComment blogId={blogId} />
      <Divider my="1rem" />
      <List width="100%">
        {commentsSorted.map((data, index) => {
          return (
            <CommentsItem
              item={data}
              key={index}
              blogId={data.id}
              replyComment={replyComment}
              setReplyComment={setReplyComment}
            />
          );
        })}
      </List>
    </Box>
  );
};

export default Comments;
