"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import type React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChessKing,
  faChessQueen,
  faChessRook,
  faChessBishop,
  faChessKnight,
  faChessPawn,
} from "@fortawesome/free-solid-svg-icons"

type Piece = "p" | "r" | "n" | "b" | "q" | "k" | "P" | "R" | "N" | "B" | "Q" | "K" | null
type Board = Piece[][]
const initialBoard: Board = [
  ["r", "n", "b", "q", "k", "b", "n", "r"],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
]

const ChessGame: React.FC = () => {
  const [board, setBoard] = useState<Board>(initialBoard)
  const [selectedPiece, setSelectedPiece] = useState<[number, number] | null>(null)
  const [playerTurn, setPlayerTurn] = useState<"white" | "black">("white")
  const [gameStatus, setGameStatus] = useState<"playing" | "check" | "checkmate" | "stalemate">("playing")
  const [promotePawn, setPromotePawn] = useState<[number, number] | null>(null)
  const [castlingRights, setCastlingRights] = useState({
    whiteKingSide: true,
    whiteQueenSide: true,
    blackKingSide: true,
    blackQueenSide: true,
  })





  useEffect(() => {
    if (playerTurn === "black") {
      setTimeout(makeComputerMove, 1000)
    }
  }, [playerTurn])

  const isValidMove = (from: [number, number], to: [number, number]): boolean => {
    const [fromRow, fromCol] = from
    const [toRow, toCol] = to
    const piece = board[fromRow][fromCol]
    const isWhitePiece = piece === piece?.toUpperCase()
    const targetPiece = board[toRow][toCol]
    const isTargetWhite = targetPiece === targetPiece?.toUpperCase()
    const isTargetBlack = targetPiece === targetPiece?.toLowerCase()

    // Check if the move is within the board
    if (toRow < 0 || toRow > 7 || toCol < 0 || toCol > 7) {
      return false
    }

    // Check if the piece is moving to its current position
    if (fromRow === toRow && fromCol === toCol) {
      return false
    }

    // Check if the piece is moving to a square occupied by a piece of the same color
    if ((isWhitePiece && isTargetWhite) || (!isWhitePiece && isTargetBlack)) {
      return false
    }

    const rowDiff = Math.abs(toRow - fromRow)
    const colDiff = Math.abs(toCol - fromCol)

    switch (piece?.toLowerCase()) {
      case "p":
        if (isWhitePiece) {
          // White pawn
          if (fromRow === 6 && toRow === 4 && fromCol === toCol && !board[5][toCol] && !board[4][toCol]) {
            return true // Two-square move from starting position
          }
          if (toRow === fromRow - 1) {
            if (fromCol === toCol && !targetPiece) {
              return true // Regular one-square move
            }
            if (Math.abs(toCol - fromCol) === 1 && isTargetBlack) {
              return true // Diagonal capture
            }
          }
        } else {
          // Black pawn
          if (fromRow === 1 && toRow === 3 && fromCol === toCol && !board[2][toCol] && !board[3][toCol]) {
            return true // Two-square move from starting position
          }
          if (toRow === fromRow + 1) {
            if (fromCol === toCol && !targetPiece) {
              return true // Regular one-square move
            }
            if (Math.abs(toCol - fromCol) === 1 && isTargetWhite) {
              return true // Diagonal capture
            }
          }
        }
        return false

      case "r":
        if (fromRow === toRow || fromCol === toCol) {
          // Check if path is clear
          const rowStep = fromRow === toRow ? 0 : toRow > fromRow ? 1 : -1
          const colStep = fromCol === toCol ? 0 : toCol > fromCol ? 1 : -1
          let row = fromRow + rowStep
          let col = fromCol + colStep
          while (row !== toRow || col !== toCol) {
            if (board[row][col] !== null) {
              return false // Path is blocked
            }
            row += rowStep
            col += colStep
          }
          return true
        }
        return false

      case "n":
        return (rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2)

      case "b":
        if (rowDiff === colDiff) {
          // Check if path is clear
          const rowStep = toRow > fromRow ? 1 : -1
          const colStep = toCol > fromCol ? 1 : -1
          let row = fromRow + rowStep
          let col = fromCol + colStep
          while (row !== toRow && col !== toCol) {
            if (board[row][col] !== null) {
              return false // Path is blocked
            }
            row += rowStep
            col += colStep
          }
          return true
        }
        return false

      case "q":
        if (fromRow === toRow || fromCol === toCol || rowDiff === colDiff) {
          // Check if path is clear
          const rowStep = fromRow === toRow ? 0 : toRow > fromRow ? 1 : -1
          const colStep = fromCol === toCol ? 0 : toCol > fromCol ? 1 : -1
          let row = fromRow + rowStep
          let col = fromCol + colStep
          while (row !== toRow || col !== toCol) {
            if (board[row][col] !== null) {
              return false // Path is blocked
            }
            row += rowStep
            col += colStep
          }
          return true
        }
        return false

      case "k":
        // Regular king move
        if (rowDiff <= 1 && colDiff <= 1) {
          return true
        }
        // Castling
        if (rowDiff === 0 && colDiff === 2) {
          if (isWhitePiece && fromRow === 7 && fromCol === 4) {
            if (toCol === 6 && castlingRights.whiteKingSide) {
              return board[7][5] === null && board[7][6] === null && board[7][7] === "R"
            }
            if (toCol === 2 && castlingRights.whiteQueenSide) {
              return board[7][3] === null && board[7][2] === null && board[7][1] === null && board[7][0] === "R"
            }
          }
          if (!isWhitePiece && fromRow === 0 && fromCol === 4) {
            if (toCol === 6 && castlingRights.blackKingSide) {
              return board[0][5] === null && board[0][6] === null && board[0][7] === "r"
            }
            if (toCol === 2 && castlingRights.blackQueenSide) {
              return board[0][3] === null && board[0][2] === null && board[0][1] === null && board[0][0] === "r"
            }
          }
        }
        return false

      default:
        return false
    }
  }

  const movePiece = (from: [number, number], to: [number, number]) => {
    const newBoard = board.map((row) => [...row])
    const [fromRow, fromCol] = from
    const [toRow, toCol] = to
    const piece = newBoard[fromRow][fromCol]

    // Check for pawn promotion
    if (piece?.toLowerCase() === "p" && (toRow === 0 || toRow === 7)) {
      setPromotePawn(to)
    }

    // Check for castling
    if (piece?.toLowerCase() === "k" && Math.abs(toCol - fromCol) === 2) {
      if (toCol === 6) {
        // King-side castling
        newBoard[toRow][5] = newBoard[toRow][7]
        newBoard[toRow][7] = null
      } else if (toCol === 2) {
        // Queen-side castling
        newBoard[toRow][3] = newBoard[toRow][0]
        newBoard[toRow][0] = null
      }
    }

    // Update castling rights
    if (piece === "K") {
      setCastlingRights((prev) => ({ ...prev, whiteKingSide: false, whiteQueenSide: false }))
    } else if (piece === "k") {
      setCastlingRights((prev) => ({ ...prev, blackKingSide: false, blackQueenSide: false }))
    } else if (piece === "R") {
      if (fromRow === 7 && fromCol === 0) setCastlingRights((prev) => ({ ...prev, whiteQueenSide: false }))
      if (fromRow === 7 && fromCol === 7) setCastlingRights((prev) => ({ ...prev, whiteKingSide: false }))
    } else if (piece === "r") {
      if (fromRow === 0 && fromCol === 0) setCastlingRights((prev) => ({ ...prev, blackQueenSide: false }))
      if (fromRow === 0 && fromCol === 7) setCastlingRights((prev) => ({ ...prev, blackKingSide: false }))
    }

    newBoard[toRow][toCol] = newBoard[fromRow][fromCol]
    newBoard[fromRow][fromCol] = null
    setBoard(newBoard)
    setPlayerTurn(playerTurn === "white" ? "black" : "white")
    checkGameStatus(newBoard)
  }

  const handleSquareClick = (row: number, col: number) => {
    if (playerTurn === "black") return

    if (selectedPiece) {
      if (isValidMove(selectedPiece, [row, col])) {
        movePiece(selectedPiece, [row, col])
        setSelectedPiece(null)
      } else {
        setSelectedPiece(null)
      }
    } else {
      const piece = board[row][col]
      if (piece && piece === piece.toUpperCase()) {
        setSelectedPiece([row, col])
      }
    }
  }

  const makeComputerMove = () => {
    const blackPieces: [number, number][] = []
    board.forEach((row, rowIndex) => {
      row.forEach((piece, colIndex) => {
        if (piece && piece === piece.toLowerCase()) {
          blackPieces.push([rowIndex, colIndex])
        }
      })
    })

    let validMove = false
    while (!validMove && blackPieces.length > 0) {
      const randomIndex = Math.floor(Math.random() * blackPieces.length)
      const [fromRow, fromCol] = blackPieces[randomIndex]

      for (let toRow = 0; toRow < 8; toRow++) {
        for (let toCol = 0; toCol < 8; toCol++) {
          if (isValidMove([fromRow, fromCol], [toRow, toCol])) {
            movePiece([fromRow, fromCol], [toRow, toCol])
            validMove = true
            break
          }
        }
        if (validMove) break
      }

      if (!validMove) {
        blackPieces.splice(randomIndex, 1)
      }
    }

    if (!validMove) {
      setGameStatus("stalemate")
    }
  }

  const checkGameStatus = (newBoard: Board) => {
    const whiteKing = newBoard.some((row) => row.includes("K"))
    const blackKing = newBoard.some((row) => row.includes("k"))

    if (!whiteKing) {
      setGameStatus("checkmate")
    } else if (!blackKing) {
      setGameStatus("checkmate")
    }
  }

  const resetGame = () => {
    setBoard(initialBoard)
    setSelectedPiece(null)
    setPlayerTurn("white")
    setGameStatus("playing")
    setPromotePawn(null)
    setCastlingRights({
      whiteKingSide: true,
      whiteQueenSide: true,
      blackKingSide: true,
      blackQueenSide: true,
    })
  }

  const handlePromotion = (piece: Piece) => {
    const [row, col] = promotePawn!
    const newBoard = board.map((row) => [...row])
    newBoard[row][col] = piece
    setBoard(newBoard)
    setPromotePawn(null)
    setPlayerTurn("black")
    checkGameStatus(newBoard)
  }

  const getPieceIcon = (piece: Piece) => {
    switch (piece?.toLowerCase()) {
      case "k":
        return <FontAwesomeIcon icon={faChessKing} className={piece === "k" ? "text-black" : "text-white"} />
      case "q":
        return <FontAwesomeIcon icon={faChessQueen} className={piece === "q" ? "text-black" : "text-white"} />
      case "r":
        return <FontAwesomeIcon icon={faChessRook} className={piece === "r" ? "text-black" : "text-white"} />
      case "b":
        return <FontAwesomeIcon icon={faChessBishop} className={piece === "b" ? "text-black" : "text-white"} />
      case "n":
        return <FontAwesomeIcon icon={faChessKnight} className={piece === "n" ? "text-black" : "text-white"} />
      case "p":
        return <FontAwesomeIcon icon={faChessPawn} className={piece === "p" ? "text-black" : "text-white"} />
      default:
        return null
    }
  }

  return (
    <div className="flex flex-col items-center bg-black">
      <div className="mb-4">
        <p className="text-lg font-semibold">
        </p>
        <p className="text-lg font-semibold">
        </p>
      </div>
      <div className="grid grid-cols-8 gap-1 bg-gray-800 p-2 rounded">
        {board.map((row, rowIndex) =>
          row.map((piece, colIndex) => (
            <motion.div
              key={`${rowIndex}-${colIndex}`}
              className={`w-12 h-12 flex items-center justify-center text-2xl cursor-pointer
                ${(rowIndex + colIndex) % 2 === 0 ? "bg-[#f0e7d5]" : "bg-gray-400"}
                ${selectedPiece && selectedPiece[0] === rowIndex && selectedPiece[1] === colIndex ? "bg-yellow-200" : ""}`}
              onClick={() => handleSquareClick(rowIndex, colIndex)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {getPieceIcon(piece)}
            </motion.div>
          )),
        )}
      </div>

      {promotePawn && (
        <div className="mt-4 flex justify-center">
          <div className="bg-white p-4 rounded shadow-lg">
            <div className="flex space-x-4">
              {["q", "r", "b", "n"].map((piece) => (
                <button
                  key={piece}
                  className="p-2 bg-blue-500 text-white rounded"
                  onClick={() => handlePromotion(piece.toUpperCase() as Piece)}
                >
                  {getPieceIcon(piece.toUpperCase() as Piece)}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={resetGame}>
        <p>Reset game</p>
      </button>
    </div>
  )
}

export default ChessGame

