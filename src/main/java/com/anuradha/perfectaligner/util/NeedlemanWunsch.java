package com.anuradha.perfectaligner.util;

public class NeedlemanWunsch extends SequenceAlignment {

    public NeedlemanWunsch(String sequence1, String sequence2) {
        super(sequence1, sequence2);
    }

    public NeedlemanWunsch(String sequence1, String sequence2, int match,
                           int mismatch, int gap) {
        super(sequence1, sequence2, match, mismatch, gap);
    }

    // assign values for each cell
    protected void fillInCell(Cell currentCell, Cell cellAbove, Cell cellToLeft,
                              Cell cellAboveLeft) {
        int rowSpaceScore = cellAbove.getScore() + space;
        int colSpaceScore = cellToLeft.getScore() + space;
        currentCell.setScoreFromUp(rowSpaceScore);
        currentCell.setScoreFromLeft(colSpaceScore);
        int matchOrMismatchScore = cellAboveLeft.getScore();
        if (sequence2.charAt(currentCell.getRow() - 1) == sequence1
                .charAt(currentCell.getCol() - 1)) {
            matchOrMismatchScore += match;
            currentCell.setScoreFromDiagonal(matchOrMismatchScore);
        } else {
            matchOrMismatchScore += mismatch;
            currentCell.setScoreFromDiagonal(matchOrMismatchScore);
        }
        if (rowSpaceScore >= colSpaceScore) {
            if (matchOrMismatchScore >= rowSpaceScore) {
                currentCell.setScore(matchOrMismatchScore);
                currentCell.setPrevCell(cellAboveLeft);
            } else {
                currentCell.setScore(rowSpaceScore);
                currentCell.setPrevCell(cellAbove);
            }
        } else {
            if (matchOrMismatchScore >= colSpaceScore) {
                currentCell.setScore(matchOrMismatchScore);
                currentCell.setPrevCell(cellAboveLeft);
            } else {
                currentCell.setScore(colSpaceScore);
                currentCell.setPrevCell(cellToLeft);
            }
        }
    }

    @Override
    protected boolean traceBackIsNotDone(Cell currentCell) {
        return currentCell.getPrevCell() != null;
    }

    @Override
    protected Cell getTracebackStartingCell() {
        return scoreTable[scoreTable.length - 1][scoreTable[0].length - 1];
    }

    /*
     * (non-Javadoc)
     *
     * @see java.lang.Object#toString()
     */
    @Override
    public String toString() {
        return "[NeedlemanWunsch: sequence1=" + sequence1 + ", sequence2="
                + sequence2 + "]";
    }

    // initialize the pointers of cells in the dynamic matrix
    public Cell getInitialPointer(int row, int col) {
        if (row == 0 && col != 0) {
            return scoreTable[row][col - 1];
        } else if (col == 0 && row != 0) {
            return scoreTable[row - 1][col];
        } else {
            return null;
        }
    }

    // initialize the starting values of cells in dynamic matrix
    public int getInitialScore(int row, int col) {
        if (row == 0 && col != 0) {
            return col * space;
        } else if (col == 0 && row != 0) {
            return row * space;
        } else {
            return 0;
        }
    }
}
