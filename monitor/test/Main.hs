module Main where

import qualified MonitorTests as MT
import qualified Test.Tasty as Tasty

main :: IO ()
main = Tasty.defaultMain tests

tests :: Tasty.TestTree
tests =
  Tasty.testGroup "Main Tests"
    [ MT.tests
    ]
